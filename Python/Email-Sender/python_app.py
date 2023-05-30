# go over to our gmail account and setup 2 factor authentication
# generate app password
# create a function to send the mail

from email.message import EmailMessage
from app_2 import password
import ssl
import smtplib

email_sender = 'ozguraktas.55555@gmail.com'
email_password = password

email_receiver = 'gebineb256@introace.com'

subject = 'Dont forget to subscribe'
body = """
    When you watch a video, please hit subscribe
"""

em = EmailMessage()
em['From'] = email_sender
em['To'] = email_receiver
em['subject'] = subject
em.set_content(body)

context = ssl.create_default_context()

with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
    smtp.login(email_sender, email_password)
    smtp.sendmail(email_sender, email_receiver, em.as_string())