class CollegeApiService
  ENDPOINT = 'https://api.data.gov/ed/collegescorecard/v1/schools'
  FIELDS = 'id,school.name,location'

  def self.execute(search)
    url = "#{ENDPOINT}?api_key=#{ENV['COLLEGE_SCORECARD_API_KEY']}"
    url += "&fields=#{FIELDS}&per_page=100&school.name=#{search}"

    response = HTTP.get(url)
    JSON.parse(response.body)['results']
  end
end
