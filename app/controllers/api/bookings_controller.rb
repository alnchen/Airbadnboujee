class Api::BookingsController < ApplicationController

  def index
    if Booking.all.length != 0
      @bookings = Booking.where(user_id: current_user.id)
    else
      render json: 'There are no bookings'
    end
  end

  def create
    @booking = Booking.new(booking_params)
    # @booking.user_id = current_user.id
    if @booking.save
      render :show
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def destroy
    @booking = Booking.find(params[:id])
    if @booking
      @booking.destroy
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  private

  def booking_params
    params.require(:booking).permit(:user_id, :listing_id, :check_in, :check_out, :num_of_guests)
  end

end
