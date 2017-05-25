class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.where(listing_id: params[:listing_id])
    render :index
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find(params[:id])
    if @review
      @review.destroy
      render 'api/reviews/show'
    else
      ender json: @review.errors.full_messages, status: 422
    end
  end

  private

  def review_params
    params.require(:review).permit(:author_id, :listing_id, :rating, :body)
  end
end
