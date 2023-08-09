import morfeusz2
from bs4 import BeautifulSoup
import random
import requests
import os
from dotenv import load_dotenv
import csv


load_dotenv()

title = input("Title: ")
author = input("Author:")
source = "Source:"
text = input("Text: ")

words = text.split()
morfeusz = morfeusz2.Morfeusz()

soup = BeautifulSoup("", "html.parser")
p = soup.new_tag("p")

word_dict = {i: v for i, v in enumerate(words)}
print(word_dict)

percent = 70
number_of_questions = int(len(word_dict) * percent / 100)
print(number_of_questions)
print(len(word_dict))
n = 1

for i in range(1, number_of_questions):
    exercise_total = 0
    key = n + random.randint(2, 7)
    print("key", key)
    try:
        chosen_word = word_dict[key]
        print("chosen word: ", chosen_word)
        if chosen_word.isalpha():
            analyse = morfeusz.analyse(chosen_word)
            base_form = analyse[0][2][1]
            print("base form: ", base_form)
            generator = morfeusz.generate(base_form)
            choices = []
            for generated_choice in generator:
                if generated_choice[0].isalpha() and generated_choice[0] != chosen_word:
                    if chosen_word.istitle():
                        choice = generated_choice[0].capitalize()
                        if choice not in choices:
                            choices.append(choice)
                    else:
                        choice = generated_choice[0]
                        if choice not in choices:
                            choices.append(choice)

            if len(choices) > 2:
                unique_choices = list(set(choices))
                final_choices = str(unique_choices[:3])
                print(final_choices)
                if len(unique_choices) > 2:
                    drop = soup.new_tag("Drop", word=chosen_word, choices=final_choices, updateScore="{updateScore}")
                    word_dict[key] = drop
                    exercise_total += 1
                n = key

    except KeyError:
        break

dict_to_paragraph = " ".join(str(value) for value in word_dict.values())
print("Back together: ", dict_to_paragraph)

final_paragraph = dict_to_paragraph.replace('"[', "{[")
final_paragraph = final_paragraph.replace(']"', "]}")
final_paragraph = final_paragraph.replace('"{', "{")
final_paragraph = final_paragraph.replace('}"', "}")

print("final: ", final_paragraph)

passage = f"<p>{final_paragraph}</p>"
print(passage)

header = ["title", "text", "author", "source"]

row = {"title": title, "author": author, "text": passage, "source": source}
with open("passages.csv", mode="a", newline="", encoding="utf-8") as file:
    writer = csv.DictWriter(file, fieldnames=header)
    writer.writerow(row)

api_username = os.getenv("API_USERNAME")
api_password = os.getenv("API_PASSWORD")

url = "http://localhost:8000/passages/"

data = {
    "title": title,
    "author": author,
    "source": source,
    "text": passage
}

print(data)
response = requests.post(url, data=data, auth=(api_username, api_password))

print(response.status_code)
print(response.content)
