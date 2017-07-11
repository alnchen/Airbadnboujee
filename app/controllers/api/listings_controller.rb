class Api::ListingsController < ApplicationController
  def index
    @listings = Listing.find_by_filters(params[:filters][:city], params[:filters][:guests])
    render :index
  end

  def show
    @listing = Listing.find_by(id: params[:id])
    if @listing
      render :show
    else
      render json: @listing.errors.full_messages
    end
  end

  def listing_params
    params.require(:listing).permit(:owner_id, :lat, :lng, :price, :image_url,
                                    :title, :description, :city, :state, :country, :max_guests)
  end

end
