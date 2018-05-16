defmodule SquarePhoenixWeb.ProgressbarController do
    use SquarePhoenixWeb, :controller
  
    def index(conn, _params) do
      render conn, "progressbar.html"
    end
  end
  