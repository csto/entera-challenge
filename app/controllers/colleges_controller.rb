class CollegesController < ApplicationController
  def index
    colleges = CollegeApiService.execute(params[:search])

    render json: {
      colleges: colleges.map do |college|
        {
          id: college['id'],
          name: college['school.name'],
          lat: college['location.lat'],
          lng: college['location.lon']
        }
      end
    }
  end
end
