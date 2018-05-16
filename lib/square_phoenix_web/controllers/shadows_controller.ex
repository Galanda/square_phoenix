defmodule SquarePhoenixWeb.ShadowsController do
    use SquarePhoenixWeb, :controller
  
    def index(conn, _params) do
      render conn, "shadows.html"
    end
  end
  