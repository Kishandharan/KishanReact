from flask import Flask
from flask_cors import CORS
import mysql.connector 

msp1 = input("Enter your MySQL password: ")
msu1 = input("Enter your MySQL user: ")
msd1 = input("Enter the database to use as the storage: ")

app1 = Flask(__name__)
con1 = mysql.connector.connect(host = "localhost", user = msu1, password = msp1)
cur1 = con1.cursor()
CORS(app1)

cur1.execute(f"create database if not exists {msd1};")


app1.run()
