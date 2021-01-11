class LinebotController < ApplicationController
  require 'line/bot'

  protect_from_fogery with: :exception
end
