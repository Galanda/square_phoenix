defmodule SquarePhoenixWeb.ListsController do
  use SquarePhoenixWeb, :controller

  def index(conn, _params) do
    render conn, "lists.html"
  end
end
