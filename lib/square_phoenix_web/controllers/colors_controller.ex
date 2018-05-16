defmodule SquarePhoenixWeb.ColorsController do
    use SquarePhoenixWeb, :controller
  
    def index(conn, _params) do
      render conn, "colors.html"
    end
  end
  