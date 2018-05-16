defmodule SquarePhoenixWeb.UtilityController do
    use SquarePhoenixWeb, :controller
  
    def index(conn, _params) do
      render conn, "utility.html"
    end
  end
  