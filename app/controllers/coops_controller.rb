class CoopsController < ApplicationController

  def index
    all_coops = Coop.all
    @coops = all_coops.select do |coop|
      coop.city.include? "RJ"
    end
    respond_to do |format|
      format.json { render :json => @coops }
    end
  end

  def show
    @coop = Coop.find(params["id"])
  end

end
