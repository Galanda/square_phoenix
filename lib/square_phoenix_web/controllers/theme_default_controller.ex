defmodule SquarePhoenixWeb.ThemeDefaultController do
    use SquarePhoenixWeb, :controller
  
    def index(conn, _params) do
      render conn, "theme_default.html"
    end
  end
  