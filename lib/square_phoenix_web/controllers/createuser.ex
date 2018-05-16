defmodule SquarePhoenixWeb.CreateuserController do
    use SquarePhoenixWeb, :controller
  
    def index(conn, _params) do
      render conn, "createuser.html"
    end
  end