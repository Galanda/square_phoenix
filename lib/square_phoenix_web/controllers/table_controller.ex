defmodule SquarePhoenixWeb.TableController do
  use SquarePhoenixWeb, :controller

  def index(conn, _params) do
    render conn, "table.html"
  end
end
