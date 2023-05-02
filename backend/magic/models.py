from django.db import models

class Passage(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=300, blank=True)
    author = models.CharField(max_length=200, blank=True)
    source=models.CharField(max_length=300,blank=True)
    text = models.TextField()
    owner = models.ForeignKey('auth.User', related_name='snippets', on_delete=models.CASCADE)

    class Meta:
        ordering = ['created']

    def __str__(self):
        return f"{self.title}, {self.author}, {self.created}"
    
    def save(self, *args, **kwargs):
    
        super().save(*args, **kwargs)


# Create your models here.
