class ApplicationController < ActionController::Base
  protect_from_forgery except: :post

  before_action :basic_auth

  def shared_data
    @shared_data ||= {}
  end
  helper_method :shared_data


  private
  
  def basic_auth
    authenticate_or_request_with_http_basic do |username, password|
      username == ENV["BASIC_AUTH_USER"] && password == ENV["BASIC_AUTH_PASSWORD"]
    end
  end
end
