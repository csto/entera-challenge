require 'rails_helper'

RSpec.describe CollegesController, type: :request do
  describe 'GET #root' do
    let(:search) { 'red' }
    let(:data) do
      [
        {
          'id' => 1,
          'school.name' => 'Red College',
          'location.lat' => 1.0,
          'location.lon' => 1.0
        }
      ]
    end

    subject { get "/colleges?search=#{search}" }

    before do
      allow(CollegeApiService).to receive(:execute).with(search).and_return(data)
    end

    it 'returns a success response' do
      subject
      expect(response).to have_http_status(:ok)
    end

    it 'returns a list of colleges' do
      formatted_data = { "id" => 1, "name" => 'Red College', "lat" => 1.0, "lng" => 1.0 }
      subject
      expect(JSON.parse(response.body)['colleges'].first).to eq(formatted_data)
    end
  end
end
