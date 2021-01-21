class PostsController < ApplicationController
  def index
    @posts = Post.all.order(id: "DESC")
    binding.pry
    respond_to do |format|
      format.html
      format.json
    end
  end
  
  def create
    @post = Post.create(post_params)
  end

  def checked
    post = Post.find(params[:id])
    if post.checked
      post.update(checked: false)
    else
      post.update(checked: true)
    end

    item = Post.find(params[:id])
    render json: { post: item }
  end
  
  private

  def post_params
    params.require(:post).permit(:content, :image)
  end
end