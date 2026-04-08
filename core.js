$(document).ready(function() {
	// 生肖数据
	const data = [
		{ key: 7, val: '鼠', img: 'img/attr_mouse.png', age: 7 }, 
		{ key: 6, val: '牛', img: 'img/attr_cattle.png', age: 6 }, 
		{ key: 5, val: '虎', img: 'img/attr_tiger.png', age: 5 }, 
		{ key: 4, val: '兔', img: 'img/attr_rabbit.png', age: 4 }, 
		{ key: 3, val: '龙', img: 'img/attr_dragon.png', age: 3 }, 
		{ key: 2, val: '蛇', img: 'img/attr_snake.png', age: 2 }, 
		{ key: 1, val: '马', img: 'img/attr_horse.png', age: 1 }, 
		{ key: 12, val: '羊', img: 'img/attr_sheep.png', age: 12 }, 
		{ key: 11, val: '猴', img: 'img/attr_monkey.png', age: 11 }, 
		{ key: 10, val: '鸡', img: 'img/attr_chicken.png', age: 10 }, 
		{ key: 9, val: '狗', img: 'img/attr_dog.png', age: 9 }, 
		{ key: 8, val: '猪', img: 'img/attr_pig.png', age:   8 }
	]
	// 三色数据（红蓝绿）
	const color = [
		[1, 2, 7, 8, 12, 13, 18, 19, 23, 24, 29, 30, 34, 35, 40, 45, 46],
		[3, 4, 9, 10, 14, 15, 20, 25, 26, 31, 36, 37, 41, 42, 47, 48],
		[5, 6, 11, 16, 17, 21, 22, 27, 28, 32, 33, 38, 39, 43, 44, 49]
	]
	
	// 添加生肖选项
	data.forEach(item => {
		$('.diy-select').append(`<option value="${item.key}">${item.val}</option>`);
	})
	
		// 确定修改类型
	$('#sure-lucky').click( function() {
		if($('#lucky-type').val() == 1) {
			$('#lucky-row-5').show()
			$('#num6').show()
			$('#num7').show()
			$('#num8').show()
			$('#num9').show()
			
			$('#img3').css('position','relative')
			$('#img3').css('transform','translateX(0)')
			$('#attr3').css('position','relative')
			$('#attr3').css('transform','translateX(0)')
			
			$('#img2').css('position','relative')
			$('#img2').css('transform','translateX(0)')
			$('#attr2').css('position','relative')
			$('#attr2').css('transform','translateX(0)')
			
			$('#attr1').css('visibility','visible')
			$('#attr4').css('visibility','visible')
			$('#img1').css('visibility','visible')
			$('#img4').css('visibility','visible')
			$('#in-num5').css('visibility','visible')
			$('#in-grade').val(1)
		} else {
			$('#lucky-row-5').hide()
			$('#num6').hide()
			$('#num7').hide()
			$('#num8').hide()
			$('#num9').hide()
			$('#attr1').css('visibility','hidden')
			$('#attr4').css('visibility','hidden')
			$('#img1').css('visibility','hidden')
			$('#img4').css('visibility','hidden')
			
			$('#img3').css('position','relative')
			$('#img3').css('transform','translateX(60px)')
			$('#attr3').css('position','relative')
			$('#attr3').css('transform','translateX(60px)')
			
			$('#img2').css('position','relative')
			$('#img2').css('transform','translateX(-60px)')
			$('#attr2').css('position','relative')
			$('#attr2').css('transform','translateX(-60px)')
			
			$('#in-num5').css('visibility','hidden')
			$('#in-grade').val(2)
		}
		// 根据等级不同展示文案
		$('#grade').text($('#in-grade option:selected').text() === '高级' ? '高级内幕彩评师' : $('#in-grade option:selected').text())
		// 根据等级拼接标题后缀
		$('#grade-tip').text($('#in-grade option:selected').text() === '高级' ? '二肖四码资料' : '五肖十码资料')
		//	根据彩种不同展示文案
		$('#type-title').text( $('#lucky-type option:selected').text() === '澳门' ? '独家澳门六合彩' : '独家香港六合彩' )
	})
	
	// 确定修改号码
	$('#sure').click( function() {
		// 修改彩种
		if($('#in-type').val() == 1) {
			$('#type-title').text('独家香港六合彩')
			$('#type-logo').text('香港六合彩')
			$('#xglogo').show()
			$('#amlogo').hide()
		} else {
			$('#type-title').text('独家澳门六合彩')
			$('#type-logo').text('新澳门六合彩')
			$('#xglogo').hide()
			$('#amlogo').show()
		}
		// 修改等级
		$('#grade').text($('#in-grade option:selected').text() === '高级' ? '高级内幕彩评师' : $('#in-grade option:selected').text())
		// 修改期数
		$('#lucky-stage').text( $('#in-stage').val() )
		// 修改号码
		for(let i = 1; i < 11; i++) {
			if(i<6) {
				setNumber($(`#in-num${i}`).val(), $(`#num${i}`), $(`#in-attr${i}`))
			} else {
				setNumber($(`#in-num${i}`).val(), $(`#num${i}`))
			}
		}
		// 修改生肖
		for(let i = 1; i < 6; i++) {
			setAttr($(`#in-attr${i}`).val(), $(`#attr${i}`), $(`#img${i}`))
		}

		//	给彩券标题赋值
		$('#lucky-title').text($('#in-stage').val() + "防伪码:" + $('#in-fwm').val());
	});
	
	// 设置对应生肖
	function setAttr(num, obj_attr, obj_img) {
		data.forEach(item => {
			if(num == item.key) {
				obj_attr.text(item.val)
				obj_img.attr('src', item.img)
				return
			}
		})
	}
	
	// 设置数字颜色
	function setNumber(num, obj_num, obj_attr) {
		for(let i = 0; i < 3; i++) {
			color[i].forEach(item => {
				if(num == item) {
					if(item < 10) item = '0' + item
					obj_num.text(item)
					if(i == 0) obj_num.css({'background-image':'url(img/red.png)'})
					if(i == 1) obj_num.css({'background-image':'url(img/blue.png)'})
					if(i == 2) obj_num.css({'background-image':'url(img/green.png)'})
					if(obj_attr) {
						data.forEach(obj => {
							let targetAge = (num % 12 === 0) ? 12 : (num % 12);
                             if (obj.age == targetAge) {
								obj_attr.val(obj.key)
							}
						})
					}
				}
			})
		}
	}
	
})