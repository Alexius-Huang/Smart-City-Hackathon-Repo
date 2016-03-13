$(document).on "page:change", ->
	$("#ajax-btn-1").click (event) ->
		event.preventDefault()
		$("#slide-1").slideToggle("slow")

	$("#ajax-btn-2").click (event) ->
		event.preventDefault()
		$("#slide-2").slideToggle("slow")

	$("#ajax-btn-3").click (event) ->
		event.preventDefault()
		$("#slide-3").slideToggle("slow")

	$("#ajax-btn-4").click (event) ->
		event.preventDefault()
		$("#slide-4").slideToggle("slow")

