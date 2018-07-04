defmodule SquarePhoenixWeb.AnimationController do
  use SquarePhoenixWeb, :controller

  def index(conn, _params) do
    render conn, "animation.html"
  end
end
