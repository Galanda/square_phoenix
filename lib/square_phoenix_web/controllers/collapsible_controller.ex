defmodule SquarePhoenixWeb.CollapsibleController do
    use SquarePhoenixWeb, :controller
  
    def index(conn, _params) do
      render conn, "collapsible.html"
    end
  end
  