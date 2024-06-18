import os
import requests
from requests.auth import HTTPDigestAuth
import pprint

base_url = "https://cloud.mongodb.com/api/atlas/v2/"
auth = HTTPDigestAuth(
   os.environ["ATLAS_USER"],
   os.environ["ATLAS_USER_KEY"]
)

headers = {
    'Accept': 'application/vnd.atlas.2023-01-01+json'  # update date to desired API version
}

response = requests.get(base_url, auth = auth, headers=headers)
pprint.pprint(response.json())
