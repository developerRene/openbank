import requests
import math

# calls participants's URL and return the data
def call_api(participant, type):
    service = "".join(type.split("-")[1:])
    print(f'Calling {participant["logo"]} : {participant["url"]}opendata-{service}/v1/{type}')
    return requests.get(participant["url"] + "opendata-" + service + "/v1/" + type)

# iterates through each participant and calls call_api
def fetch_data(participants, type):
    result = []
    for participant in participants:
        try:
            response = call_api(participant, type)
            if response.status_code == 200:
                print(" - OK (status code)")
                result.append({
                    "url": participant["url"],
                    "logo": participant["logo"],
                    "data": response.json()
                })
                print(" - OK (data processing)")
            else:
                print(" - ERROR (status code)")
        except:
            print(" - ERROR (exception)")
    return result
