defmodule SquarePhoenixWeb.BorderAnimationController do
    use SquarePhoenixWeb, :controller
  
    def index(conn, _params) do
      render conn, "borderanimation.html"
    end
  end
  