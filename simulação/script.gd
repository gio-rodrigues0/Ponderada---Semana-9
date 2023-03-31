extends Node2D

var coordinates = []

func _process(delta):
	pass

func _on_timer_timeout():
	$HTTPRequest.request('http://localhost:5000/simulacao')


func _on_http_request_request_completed(result, response_code, headers, body):
	var json = JSON.new()
	json.parse(body.get_string_from_utf8())
	coordinates = json.get_data()[0]

func showCoordinates(x, y, z, j1, j2, j3):
	var coordinates = "X: %s \n Y: %s \n Z: %s \n J1: %s \n J2: %s \n J3: %s"
	$Label.text = coordinates % [x, y, z, j1, j2, j3]
	
func defineXY(position):
	var tween = create_tween()
	tween.tween_property($Braço, "xy", (position - global_position).angle() + PI / 2, 1)

func defineZ(position):
	var tween = create_tween()
	tween.tween_property($Braço, "z", Vector2(position/100, position/100), 1)

func moveArm():
	showCoordinates(coordinates[0], coordinates[1], coordinates[2], coordinates[3], coordinates[4], coordinates[5])

	defineXY(Vector2(coordinates[0], coordinates[1]))

	defineZ(coordinates[2])
	
	
	
