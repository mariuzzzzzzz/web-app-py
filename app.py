from flask import Flask
from flask.helpers import send_file

app = Flask(__name__, static_url_path='/', static_folder='frontend')

@app.route("/")
def indexPage():
    return send_file("frontend/index.html")