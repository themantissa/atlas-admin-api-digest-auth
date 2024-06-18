require 'httparty'
require 'json'

base_url = 'https://cloud.mongodb.com/api/atlas/v2/'
options = {
  :digest_auth => {
    :username=>ENV['ATLAS_USER'],
    :password=>ENV['ATLAS_USER_KEY']
  },
  headers: {
    'Accept' => 'application/vnd.atlas.2023-01-01+json' # update date to desired API version
  }
}

result = HTTParty.get(base_url, options)

pp JSON.parse(result.body())
