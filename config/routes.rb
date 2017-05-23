Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :bookings, only: [:index, :create, :destroy]
    resources :listings, only: [:index, :show, :create]
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
  end

  root "static_pages#root"
end
