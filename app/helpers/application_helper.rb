module ApplicationHelper
	def gap(pixels)
		"<div style='margin-top: #{pixels}px'></div> ".html_save
	end
  
  def html_icon(icon_type)
  	"<i class='glyphicon glyphicon-#{icon_type}'></i> ".html_safe
  end

end
