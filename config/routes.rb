Rails.application.routes.draw do
  resources :colleges, only: [:index]
  root "application#root"
end
