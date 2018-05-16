defmodule SquarePhoenixWeb.TypographyController do
    use SquarePhoenixWeb, :controller
  
    def typography(conn, _params) do
      render conn, "typography.html"
    end
  end