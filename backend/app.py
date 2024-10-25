from flask import Flask, send_from_directory
import os

# Assuming your build folder is inside 'frontend'
app = Flask(__name__, static_folder='../frontend/build')

@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def static_files(path):
    return send_from_directory(app.static_folder, path)

if __name__ == "__main__":
    app.run(debug=True)
