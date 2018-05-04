from flask import Flask, render_template, session, redirect, request, jsonify
import requests
app = Flask(__name__)
app.secret_key = "magical unicorns"
@app.route("/")
def index():
    
    return render_template("index.html")

@app.route("/process", methods=['POST'])
def process():


    print("in if")
    if "url" in request.form:
        print("--------------------------------------------------")
        print(request.form['url'])
        url = request.form['url']

        req = requests.get(url)

        return jsonify({"return": req.text})
    

app.run(debug=True)