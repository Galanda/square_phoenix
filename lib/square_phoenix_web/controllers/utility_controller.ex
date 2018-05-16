defmodule SquarePhoenixWeb.UtilityController do
    use SquarePhoenixWeb, :controller
  
    def utility(conn, _params) do
      render conn, "utility.html"
    end
  end
  