defmodule SquarePhoenixWeb.TypographyController do
    use SquarePhoenixWeb, :controller
  
    def index(conn, _params) do
      render conn, "typography.html"
    end
  end