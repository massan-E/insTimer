class ButtonsController < ApplicationController
  def index
    @buttons = Button.all
  end
end