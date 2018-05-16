defmodule SquarePhoenixWeb.Router do
  use SquarePhoenixWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", SquarePhoenixWeb do
    pipe_through :browser # Use the default browser stack

  get "/", PageController, :index
	get "/radiobuttons", RadiobuttonsController, :index
	get "/chartist", ChartistController, :index
  end

  # Other scopes may use custom stacks.
  # scope "/api", SquarePhoenixWeb do
  #   pipe_through :api
  # end
end
