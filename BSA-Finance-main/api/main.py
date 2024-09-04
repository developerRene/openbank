import json
from fastapi import FastAPI
from caller import fetch_data


# initialize a dict with each search type 
data = {
    "personal-loans": [],
    "personal-financings": [],
    "personal-credit-cards": [],
    "business-loans": [],
    "business-financings": [],
    "business-credit-cards": [],
    "business-invoice-financings": [],
}
# change is_test to True if you want to use the values stored in data.json
is_test = False
if is_test:
    with open("data.json") as file:
        data = json.load(file)
else:
    with open("participants.json") as file:
        participants = json.load(file)
    for type in data:
        data[type] = fetch_data(participants, type)
    with open("data.json", "w", encoding="utf-8") as file:
        json.dump(data, file, ensure_ascii=True, indent=4)


app = FastAPI()

@app.get("/{type}")
def read_root(type: str):
    return data[type]
