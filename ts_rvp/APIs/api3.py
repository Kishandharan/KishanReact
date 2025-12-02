from flask import Flask
from flask_cors import CORS
import mysql.connector

mysql_password = input("Enter your mysql password: ")
app1 = Flask(__name__)
CORS(app1)
connection = mysql.connector.connect(
    host = "localhost",
    user = "root",
    password = mysql_password
)
cursor = connection.cursor()

@app1.route("/createdb/<dbname>")
def route1(dbname):
    cursor.execute(f"create database {dbname};")
    return {"response": "done"}

@app1.route("/deletedb/<dbname>")
def route2(dbname):
    cursor.execute(f"drop database {dbname}")
    return {"response": "done"}

@app1.route("/showdbs")
def route3():
    cursor.execute("show databases;")
    list1 = cursor.fetchall()
    list2 = []
    for i in list1:
        list2.append(i[0])
    return {"response":list2}


app1.run()
