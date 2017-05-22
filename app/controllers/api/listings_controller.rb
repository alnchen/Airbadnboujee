class Api::ListingsController < ApplicationController
  def index    
    @listings = Listing.find_by_filters(params[:filters][:city], params[:filters][:guests])


      # if (params[:maxGuests])
      #   listings = listings.where(max)
      # else
      #
      # ends

      render :index
  end

  # def create
  #   @listing = Listing.new(listing_params)
  #
  #   if @listing.save
  #     render :show
  #   else
  #     render json: @listing.errors.full_messages
  #   end
  # end

  def show
    @listing = Listing.find_by(id: params[:id])
    if @listing
      render :show
    else
      render json: @listing.errors.full_messages
    end
  end

  def destroy
    # implementation to come
  end

  def update
    # implementation to come
  end

  def listing_params
    params.require(:listing).permit(:owner_id, :lat, :lng, :price, :image_url,
                                    :title, :description, :city, :state, :country, :max_guests)
  end

end
