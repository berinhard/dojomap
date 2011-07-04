class CoopsController < ApplicationController

  def index
    @coops = Coop.all
    respond_to do |format|
      format.json { render :json => @coops }
    end
  end

  def show
    @coop = Coop.find(params["id"])
  end

end
