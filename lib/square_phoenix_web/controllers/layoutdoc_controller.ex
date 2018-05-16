defmodule SquarePhoenixWeb.LayoutDocController do
  use SquarePhoenixWeb, :controller

  def index(conn, _params) do
    render conn, "layout_doc.html"
  end
end
