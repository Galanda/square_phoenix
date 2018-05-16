defmodule SquarePhoenixWeb.AlignitemsController do
  use SquarePhoenixWeb, :controller

  def index(conn, _params) do
    render conn, "alignitems.html"
  end
end
