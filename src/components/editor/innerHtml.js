const innerHtml = '<p style="text-align: center;"><strong><span style="font-size: 20px;"><span style="text-align: center;">入 &nbsp;院 &nbsp;记 &nbsp;录</span></span></strong></p><p><strong><span style="font-size: 20px; text-align: center;"><br/></span></strong></p><p><span style="font-size: 13px; text-align: center;">&nbsp;科室：</span><span id="depCode" title="骨伤科" sde-model="{&quot;ID&quot;:&quot;depCode&quot;,&quot;TYPE&quot;:&quot;text&quot;,&quot;NAME&quot;:&quot;骨伤科&quot;,&quot;TAG&quot;:&quot;&quot;,&quot;DESCNAME&quot;:&quot;骨伤科&quot;,&quot;VERIFYTYPE&quot;:&quot;text&quot;,&quot;VALUE&quot;:&quot;骨伤科&quot;,&quot;REQUIRED&quot;:0,&quot;READONLY&quot;:1,&quot;COLOR&quot;:&quot;000000&quot;}" contenteditable="false" class="defaultbackgroundcolor" style="font-size: 13px; text-align: center;"><span class="sde-left" contenteditable="false" style="margin: 0px 3px; padding: 0px 3px; color: #808080;">[</span><span title="骨伤科" class="sde-value" contenteditable="false" style="min-width: 15px;">骨伤科</span><span contenteditable="false" class="sde-right" style="margin: 0px 3px; padding: 0px 3px; color: #808080;">]</span></span><span style="font-size: 13px; text-align: center;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;床号：</span><span id="bedNum" title="床号" sde-model="{&quot;ID&quot;:&quot;bedNum&quot;,&quot;TYPE&quot;:&quot;text&quot;,&quot;NAME&quot;:&quot;床号&quot;,&quot;TAG&quot;:&quot;&quot;,&quot;DESCNAME&quot;:&quot;床号&quot;,&quot;VERIFYTYPE&quot;:&quot;text&quot;,&quot;VALUE&quot;:&quot;F00198&quot;,&quot;REQUIRED&quot;:0,&quot;READONLY&quot;:1,&quot;COLOR&quot;:&quot;000000&quot;}" contenteditable="false" class="defaultbackgroundcolor" style="font-size: 13px; text-align: center;"><span class="sde-left" contenteditable="false" style="margin: 0px 3px; padding: 0px 3px; color: #808080;">[</span><span title="床号" class="sde-value" contenteditable="false" style="min-width: 15px;">F00198</span><span contenteditable="false" class="sde-right" style="margin: 0px 3px; padding: 0px 3px; color: #808080;">]</span></span><span style="font-size: 13px; text-align: center;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;姓名：</span><span id="patientName" title="姓名" sde-model="{&quot;ID&quot;:&quot;patientName&quot;,&quot;TYPE&quot;:&quot;text&quot;,&quot;NAME&quot;:&quot;姓名&quot;,&quot;TAG&quot;:&quot;&quot;,&quot;DESCNAME&quot;:&quot;姓名&quot;,&quot;VERIFYTYPE&quot;:&quot;text&quot;,&quot;VALUE&quot;:&quot;张子栋&quot;,&quot;REQUIRED&quot;:0,&quot;READONLY&quot;:1,&quot;COLOR&quot;:&quot;000000&quot;}" contenteditable="false" class="defaultbackgroundcolor" style="font-size: 13px; text-align: center;"><span class="sde-left" contenteditable="false" style="margin: 0px 3px; padding: 0px 3px; color: #808080;">[</span><span title="姓名" class="sde-value" contenteditable="false" style="min-width: 15px;">张子栋</span><span contenteditable="false" class="sde-right" style="margin: 0px 3px; padding: 0px 3px; color: #808080;">]</span></span><span style="font-size: 13px; text-align: center;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="font-size: 13px; text-align: center; white-space: normal;">住院号：</span><span id="zyNum" title="住院号" sde-model="{&quot;ID&quot;:&quot;zyNum&quot;,&quot;TYPE&quot;:&quot;text&quot;,&quot;NAME&quot;:&quot;住院号&quot;,&quot;TAG&quot;:&quot;&quot;,&quot;DESCNAME&quot;:&quot;住院号&quot;,&quot;VERIFYTYPE&quot;:&quot;text&quot;,&quot;VALUE&quot;:&quot;000000001&quot;,&quot;REQUIRED&quot;:0,&quot;READONLY&quot;:1,&quot;COLOR&quot;:&quot;000000&quot;}" contenteditable="false" class="defaultbackgroundcolor" style="font-size: 13px; text-align: center; white-space: normal;"><span class="sde-left" contenteditable="false" style="margin: 0px 3px; padding: 0px 3px; color: rgb(128, 128, 128);">[</span><span title="住院号" class="sde-value" contenteditable="false" style="min-width: 15px;">000000001</span><span contenteditable="false" class="sde-right" style="margin: 0px 3px; padding: 0px 3px; color: rgb(128, 128, 128);">]</span></span></span></p><hr style="font-size: 16px; white-space: normal;"/><p style="font-size: 16px; white-space: normal;">患者姓名:<span class="oak-field oakplugin" style="width:auto" oakplugin="input" id="patientId" title="患者姓名" obj="{&#39;orgname&#39;:&#39;患者姓名&#39;,&#39;orgID&#39;:&#39;patientId&#39;,&#39;defaultValue&#39;:&#39;张子栋&#39;,&#39;regnex&#39;:&#39;&#39;,&#39;textType&#39;:&#39;普通文本&#39;,&#39;width&#39;:&#39;20&#39;,&#39;fontSize&#39;:&#39;16&#39;,&#39;color&#39;:&#39;#3c3c3c&#39;,&#39;textAlign&#39;:&#39;left&#39;}" contenteditable="false"><span class="oak-field oak-left" style="width:auto" contenteditable="false">[</span><span class="oak-field oak-field-value" style="min-height:16px;min-width:20px;font-size:16px;color:#3c3c3c;text-align:left" regnex="" contenteditable="false" onkeydown="if(window.getSelection().focusOffset==0){if(event.keyCode==8||event.keyCode==46){return false;}}" onblur="this.setAttribute(&#39;contenteditable&#39;,false)" onclick="this.setAttribute(&#39;contenteditable&#39;,true);this.focus();">张子栋</span><span class="oak-field oak-right" style="width:auto" contenteditable="false">]</span></span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 职业：<span class="oak-field oakplugin" style="width:auto" oakplugin="select" id="word" title="职业" obj="{&#39;type&#39;:&#39;select&#39;,&#39;dynaUrl&#39;:&#39;&#39;,&#39;orgname&#39;:&#39;职业&#39;,&#39;orgID&#39;:&#39;word&#39;,&#39;color&#39;:&#39;#3c3c3c&#39;,&#39;defaultValue&#39;:&#39;码农&#39;,&#39;bindData&#39;:[{&#39;VALUE&#39;:&#39;码农&#39;,&#39;TEXT&#39;:&#39;码农&#39;,&#39;SELECTED&#39;:true},{&#39;VALUE&#39;:&#39;医生&#39;,&#39;TEXT&#39;:&#39;医生&#39;,&#39;SELECTED&#39;:false},{&#39;VALUE&#39;:&#39;护士&#39;,&#39;TEXT&#39;:&#39;护士&#39;,&#39;SELECTED&#39;:false},{&#39;VALUE&#39;:&#39;老师&#39;,&#39;TEXT&#39;:&#39;老师&#39;,&#39;SELECTED&#39;:false},{&#39;VALUE&#39;:&#39;理财经理&#39;,&#39;TEXT&#39;:&#39;理财经理&#39;,&#39;SELECTED&#39;:false}]}" contenteditable="false"><span class="oak-field oak-left" style="width:auto" contenteditable="false">[</span><span class="oak-field oak-field-value" style="color: #3c3c3c">老师</span><span class="oak-field oak-right" style="width:auto" contenteditable="false">]</span></span></p><div class="oak-field oak-select-root" style="display: none;"><div class="oak-select-content oak-field"><ul class="oak-select oak-field list-paddingleft-2" data-type="select"><li class="oak-field" value="码农" title="码农"><p>码农</p></li><li class="oak-field" value="医生" title="医生"><p>医生</p></li><li class="oak-field" value="护士" title="护士"><p>护士</p></li><li class="oak-field selected" value="老师" title="老师"><p>老师</p></li><li class="oak-field" value="理财经理" title="理财经理"><p>理财经理</p></li></ul></div></div><p></p><div class="oak-field oak-select-root" style="display: none;"><div class="oak-select-content oak-field"><ul class="oak-select oak-field list-paddingleft-2" data-type="select"><li class="selected oak-field" value="码农" title="码农"><p>码农</p></li><li class="oak-field" value="医生" title="医生"><p>医生</p></li><li class="oak-field" value="护士" title="护士"><p>护士</p></li><li class="oak-field" value="老师" title="老师"><p>老师</p></li><li class="oak-field" value="理财经理" title="理财经理"><p>理财经理</p></li></ul></div></div><p></p><p style="font-size: 16px; white-space: normal;">性别： &nbsp;<span class="oak-field oakplugin" style="width:auto" oakplugin="select" id="sex" title="性别" obj="{&#39;type&#39;:&#39;select&#39;,&#39;dynaUrl&#39;:&#39;&#39;,&#39;orgname&#39;:&#39;性别&#39;,&#39;orgID&#39;:&#39;sex&#39;,&#39;color&#39;:&#39;#3c3c3c&#39;,&#39;defaultValue&#39;:&#39;未知&#39;,&#39;bindData&#39;:[{&#39;VALUE&#39;:&#39;男性&#39;,&#39;TEXT&#39;:&#39;男性&#39;,&#39;SELECTED&#39;:false},{&#39;VALUE&#39;:&#39;女性&#39;,&#39;TEXT&#39;:&#39;女性&#39;,&#39;SELECTED&#39;:false},{&#39;VALUE&#39;:&#39;未知&#39;,&#39;TEXT&#39;:&#39;未知&#39;,&#39;SELECTED&#39;:true}]}" contenteditable="false"><span class="oak-field oak-left" style="width:auto" contenteditable="false">[</span><span class="oak-field oak-field-value" style="color: #3c3c3c">男性</span><span class="oak-field oak-right" style="width:auto" contenteditable="false">]</span></span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;出生地 : &nbsp;<span class="oak-field oakplugin" style="width:auto" oakplugin="select" id="birthPlace" title="出生地" obj="{&#39;type&#39;:&#39;select&#39;,&#39;dynaUrl&#39;:&#39;&#39;,&#39;orgname&#39;:&#39;出生地&#39;,&#39;orgID&#39;:&#39;birthPlace&#39;,&#39;color&#39;:&#39;#3c3c3c&#39;,&#39;defaultValue&#39;:&#39;&#39;,&#39;bindData&#39;:[{&#39;VALUE&#39;:&#39;上海&#39;,&#39;TEXT&#39;:&#39;上海&#39;,&#39;SELECTED&#39;:false},{&#39;VALUE&#39;:&#39;北京&#39;,&#39;TEXT&#39;:&#39;北京&#39;,&#39;SELECTED&#39;:false},{&#39;VALUE&#39;:&#39;重庆&#39;,&#39;TEXT&#39;:&#39;重庆&#39;,&#39;SELECTED&#39;:false},{&#39;VALUE&#39;:&#39;成都&#39;,&#39;TEXT&#39;:&#39;成都&#39;,&#39;SELECTED&#39;:false}]}" contenteditable="false"><span class="oak-field oak-left" style="width:auto" contenteditable="false">[</span><span class="oak-field oak-field-value" style="color: #3c3c3c">出生地</span><span class="oak-field oak-right" style="width:auto" contenteditable="false">]</span></span></p><div class="oak-field oak-select-root" style="display: none;"><div class="oak-select-content oak-field"><ul class="oak-select oak-field list-paddingleft-2" data-type="select"><li class="selected oak-field" value="上海" title="上海"><p>上海</p></li><li class="oak-field" value="重庆" title="重庆"><p>重庆</p></li><li class="oak-field" value="成都" title="成都"><p>成都</p></li></ul></div></div><p></p><p></p><p></p><p style="font-size: 16px; white-space: normal;">年龄：<span class="oak-field oakplugin" style="width:auto" oakplugin="input" id="age" title="年龄" obj="{&#39;orgname&#39;:&#39;年龄&#39;,&#39;orgID&#39;:&#39;age&#39;,&#39;defaultValue&#39;:&#39;25&#39;,&#39;regnex&#39;:&#39;&#39;,&#39;textType&#39;:&#39;普通文本&#39;,&#39;width&#39;:&#39;20&#39;,&#39;fontSize&#39;:&#39;16&#39;,&#39;color&#39;:&#39;#3c3c3c&#39;,&#39;textAlign&#39;:&#39;left&#39;}" contenteditable="false"><span class="oak-field oak-left" style="width:auto" contenteditable="false">[</span><span class="oak-field oak-field-value" style="min-height:16px;min-width:20px;font-size:16px;color:#3c3c3c;text-align:left" regnex="" contenteditable="false" onkeydown="if(window.getSelection().focusOffset==0){if(event.keyCode==8||event.keyCode==46){return false;}}" onblur="this.setAttribute(&#39;contenteditable&#39;,false)" onclick="this.setAttribute(&#39;contenteditable&#39;,true);this.focus();">25</span><span class="oak-field oak-right" style="width:auto" contenteditable="false">]</span></span>岁 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 婚姻状况：<span class="oak-field oakplugin" style="width:auto" oakplugin="select" id="hunyin" title="婚姻状况" obj="{&#39;type&#39;:&#39;select&#39;,&#39;dynaUrl&#39;:&#39;&#39;,&#39;orgname&#39;:&#39;婚姻状况&#39;,&#39;orgID&#39;:&#39;hunyin&#39;,&#39;color&#39;:&#39;#3c3c3c&#39;,&#39;defaultValue&#39;:&#39;未婚&#39;,&#39;bindData&#39;:[{&#39;VALUE&#39;:&#39;未婚&#39;,&#39;TEXT&#39;:&#39;未婚&#39;,&#39;SELECTED&#39;:true},{&#39;VALUE&#39;:&#39;已婚&#39;,&#39;TEXT&#39;:&#39;已婚&#39;,&#39;SELECTED&#39;:false},{&#39;VALUE&#39;:&#39;利益&#39;,&#39;TEXT&#39;:&#39;利益&#39;,&#39;SELECTED&#39;:false}]}" contenteditable="false"><span class="oak-field oak-left" style="width:auto" contenteditable="false">[</span><span class="oak-field oak-field-value" style="color: #3c3c3c">未婚</span><span class="oak-field oak-right" style="width:auto" contenteditable="false">]</span></span></p><p></p><p style="font-size: 16px; white-space: normal;">入院时间：<span class="oak-field oakplugin" style="width:auto" oakplugin="timeinput" id="ruyuandate" title="入院时间" obj="{&#39;orgname&#39;:&#39;入院时间&#39;,&#39;orgID&#39;:&#39;ruyuandate&#39;,&#39;defaultValue&#39;:&#39;2017-07-18 16:31:32&#39;,&#39;minDate&#39;:&#39;&#39;,&#39;maxDate&#39;:&#39;&#39;,&#39;defaultValue_1&#39;:&#39;2017-07-18 16:31:32&#39;,&#39;minDate_1&#39;:&#39;&#39;,&#39;maxDate_1&#39;:&#39;&#39;,&#39;textType&#39;:&#39;yyyy-MM-dd HH:mm:ss&#39;,&#39;width&#39;:&#39;150&#39;,&#39;fontSize&#39;:&#39;16&#39;,&#39;color&#39;:&#39;#3c3c3c&#39;,&#39;vel&#39;:&#39;ruyuandate1500628291729&#39;}" contenteditable="false"><span class="oak-field oak-left" style="width:auto" contenteditable="false">[</span><input class="oak-field oak-field-value" style="width:100px;min-height:16px;min-width:150px;font-size:16px;color:#3c3c3c;" value="2017-07-18 16:31:32" onclick="if(document.body.getAttribute(&#39;pattern&#39;)==&#39;readonly&#39;){return;}WdatePicker({dateFmt:&#39;yyyy-MM-dd HH:mm:ss&#39;,vel:&#39;ruyuandate1500628291729&#39;,minDate:&#39;&#39;,maxDate:&#39;&#39;})"/><input type="hidden" id="ruyuandate1500628291729" value="2017-07-27 16:31:32"/><span class="oak-field oak-right" style="width:auto" contenteditable="false">]</span></span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 民族：<span class="oak-field oakplugin" style="width:auto" oakplugin="select" id="minzu" title="民族" obj="{&#39;type&#39;:&#39;select&#39;,&#39;dynaUrl&#39;:&#39;&#39;,&#39;orgname&#39;:&#39;民族&#39;,&#39;orgID&#39;:&#39;minzu&#39;,&#39;color&#39;:&#39;#3c3c3c&#39;,&#39;defaultValue&#39;:&#39;汉族&#39;,&#39;bindData&#39;:[{&#39;VALUE&#39;:&#39;汉族&#39;,&#39;TEXT&#39;:&#39;汉族&#39;,&#39;SELECTED&#39;:true},{&#39;VALUE&#39;:&#39;苗族&#39;,&#39;TEXT&#39;:&#39;苗族&#39;,&#39;SELECTED&#39;:false},{&#39;VALUE&#39;:&#39;土家族&#39;,&#39;TEXT&#39;:&#39;土家族&#39;,&#39;SELECTED&#39;:false}]}" contenteditable="false"><span class="oak-field oak-left" style="width:auto" contenteditable="false">[</span><span class="oak-field oak-field-value" style="color: #3c3c3c">汉族</span><span class="oak-field oak-right" style="width:auto" contenteditable="false">]</span></span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p><p style="font-size: 16px; white-space: normal; text-align: left;">记录时间：<span class="oak-field oakplugin" style="width:auto" oakplugin="timeinput" id="" title="记录时间" obj="{&#39;orgname&#39;:&#39;记录时间&#39;,&#39;orgID&#39;:&#39;&#39;,&#39;defaultValue&#39;:&#39;2017-07-21 08:00:00&#39;,&#39;minDate&#39;:&#39;&#39;,&#39;maxDate&#39;:&#39;&#39;,&#39;defaultValue_1&#39;:&#39;2017-07-21&#39;,&#39;minDate_1&#39;:&#39;&#39;,&#39;maxDate_1&#39;:&#39;&#39;,&#39;textType&#39;:&#39;yyyy-MM-dd HH:mm:ss&#39;,&#39;width&#39;:&#39;150&#39;,&#39;fontSize&#39;:&#39;16&#39;,&#39;color&#39;:&#39;#3c3c3c&#39;,&#39;vel&#39;:&#39;1500628297601&#39;}" contenteditable="false"><span class="oak-field oak-left" style="width:auto" contenteditable="false">[</span><input class="oak-field oak-field-value" style="width:100px;min-height:16px;min-width:150px;font-size:16px;color:#3c3c3c;" value="2017-07-21 08:00:00" onclick="if(document.body.getAttribute(&#39;pattern&#39;)==&#39;readonly&#39;){return;}WdatePicker({dateFmt:&#39;yyyy-MM-dd HH:mm:ss&#39;,vel:&#39;1500628297601&#39;,minDate:&#39;&#39;,maxDate:&#39;&#39;})"/><input type="hidden" id="1500628297601" value="2017-07-27 08:00:00"/><span class="oak-field oak-right" style="width:auto" contenteditable="false">]</span></span></p><p style="font-size: 16px; white-space: normal;">病史描述者：<span class="oak-field oakplugin" style="width:auto" oakplugin="select" id="people" title="描述者" obj="{&#39;type&#39;:&#39;select&#39;,&#39;dynaUrl&#39;:&#39;&#39;,&#39;orgname&#39;:&#39;描述者&#39;,&#39;orgID&#39;:&#39;people&#39;,&#39;color&#39;:&#39;#3c3c3c&#39;,&#39;defaultValue&#39;:&#39;哥哥&#39;,&#39;bindData&#39;:[{&#39;VALUE&#39;:&#39;哥哥&#39;,&#39;TEXT&#39;:&#39;哥哥&#39;,&#39;SELECTED&#39;:true},{&#39;VALUE&#39;:&#39;姐姐&#39;,&#39;TEXT&#39;:&#39;姐姐&#39;,&#39;SELECTED&#39;:false},{&#39;VALUE&#39;:&#39;妈妈&#39;,&#39;TEXT&#39;:&#39;妈妈&#39;,&#39;SELECTED&#39;:false}]}" contenteditable="false"><span class="oak-field oak-left" style="width:auto" contenteditable="false">[</span><span class="oak-field oak-field-value" style="color: #3c3c3c">哥哥</span><span class="oak-field oak-right" style="width:auto" contenteditable="false">]</span></span></p><p style="font-size: 16px; white-space: normal;"><strong style="font-size: 16px; white-space: normal;">主诉 </strong>:&nbsp;<span class="oak-field oakplugin" style="width:auto" oakplugin="input" id="jianyao" title="简要" obj="{&#39;orgname&#39;:&#39;简要&#39;,&#39;orgID&#39;:&#39;jianyao&#39;,&#39;defaultValue&#39;:&#39;简要&#39;,&#39;regnex&#39;:&#39;&#39;,&#39;textType&#39;:&#39;普通文本&#39;,&#39;width&#39;:&#39;20&#39;,&#39;fontSize&#39;:&#39;16&#39;,&#39;color&#39;:&#39;#ff8080&#39;,&#39;textAlign&#39;:&#39;left&#39;}" contenteditable="false"><span class="oak-field oak-left" style="width:auto" contenteditable="false">[</span><span class="oak-field oak-field-value" style="min-height:16px;min-width:20px;font-size:16px;color:#ff8080;text-align:left" regnex="" contenteditable="false" onkeydown="if(window.getSelection().focusOffset==0){if(event.keyCode==8||event.keyCode==46){return false;}}" onblur="this.setAttribute(&#39;contenteditable&#39;,false)" onclick="this.setAttribute(&#39;contenteditable&#39;,true);this.focus();">简要</span><span class="oak-field oak-right" style="width:auto" contenteditable="false">]</span></span>&nbsp;<span class="oak-field oakplugin" style="width:auto" oakplugin="select" id="" title="既往治疗方式" obj="{&#39;type&#39;:&#39;select&#39;,&#39;dynaUrl&#39;:&#39;&#39;,&#39;orgname&#39;:&#39;既往治疗方式&#39;,&#39;orgID&#39;:&#39;&#39;,&#39;color&#39;:&#39;#ff8080&#39;,&#39;defaultValue&#39;:&#39;手术&#39;,&#39;bindData&#39;:[{&#39;VALUE&#39;:&#39;手术&#39;,&#39;TEXT&#39;:&#39;手术&#39;,&#39;SELECTED&#39;:false},{&#39;VALUE&#39;:&#39;放疗&#39;,&#39;TEXT&#39;:&#39;放疗&#39;,&#39;SELECTED&#39;:false},{&#39;VALUE&#39;:&#39;化疗&#39;,&#39;TEXT&#39;:&#39;化疗&#39;,&#39;SELECTED&#39;:false}]}" contenteditable="false"><span class="oak-field oak-left" style="width:auto" contenteditable="false">[</span><span class="oak-field oak-field-value" style="color: #ff8080">手术</span><span class="oak-field oak-right" style="width:auto" contenteditable="false">]</span></span>后症状表现</p><p></p><p></p><p style="font-size: 16px; white-space: normal;"><span style="font-size: 16px;"><strong style="font-size: 16px; white-space: normal;">现病史：</strong><span class="oak-field oakplugin" style="width:auto" oakplugin="input" id="xbs" title="现病史" obj="{&#39;orgname&#39;:&#39;现病史&#39;,&#39;orgID&#39;:&#39;xbs&#39;,&#39;defaultValue&#39;:&#39;现病史&#39;,&#39;regnex&#39;:&#39;&#39;,&#39;textType&#39;:&#39;普通文本&#39;,&#39;width&#39;:&#39;20&#39;,&#39;fontSize&#39;:&#39;16&#39;,&#39;color&#39;:&#39;#3c3c3c&#39;,&#39;textAlign&#39;:&#39;left&#39;}" contenteditable="false"><span class="oak-field oak-left" style="width:auto" contenteditable="false">[</span><span class="oak-field oak-field-value" style="min-height:16px;min-width:20px;font-size:16px;color:#3c3c3c;text-align:left" regnex="" contenteditable="false" onkeydown="if(window.getSelection().focusOffset==0){if(event.keyCode==8||event.keyCode==46){return false;}}" onblur="this.setAttribute(&#39;contenteditable&#39;,false)" onclick="this.setAttribute(&#39;contenteditable&#39;,true);this.focus();">现病史</span><span class="oak-field oak-right" style="width:auto" contenteditable="false">]</span></span>。<span style="font-size: 16px;">现在来我院就诊，于</span><span class="oak-field oakplugin" style="width:auto" oakplugin="select" id="ryfs" title="入院方式" obj="{&#39;type&#39;:&#39;select&#39;,&#39;dynaUrl&#39;:&#39;&#39;,&#39;orgname&#39;:&#39;入院方式&#39;,&#39;orgID&#39;:&#39;ryfs&#39;,&#39;color&#39;:&#39;#3c3c3c&#39;,&#39;defaultValue&#39;:&#39;绿色通道&#39;,&#39;bindData&#39;:[{&#39;VALUE&#39;:&#39;步行&#39;,&#39;TEXT&#39;:&#39;步行&#39;,&#39;SELECTED&#39;:false},{&#39;VALUE&#39;:&#39;坐车&#39;,&#39;TEXT&#39;:&#39;坐车&#39;,&#39;SELECTED&#39;:false},{&#39;VALUE&#39;:&#39;绿色通道&#39;,&#39;TEXT&#39;:&#39;绿色通道&#39;,&#39;SELECTED&#39;:true}]}" contenteditable="false"><span class="oak-field oak-left" style="width:auto" contenteditable="false">[</span><span class="oak-field oak-field-value" style="color: #3c3c3c">绿色通道</span><span class="oak-field oak-right" style="width:auto" contenteditable="false">]</span></span><span style="font-size: 16px;">以</span><span class="oak-field oakplugin" style="width:auto" oakplugin="select" id="yqzd" title="院前诊断" obj="{&#39;type&#39;:&#39;select&#39;,&#39;dynaUrl&#39;:&#39;&#39;,&#39;orgname&#39;:&#39;院前诊断&#39;,&#39;orgID&#39;:&#39;yqzd&#39;,&#39;color&#39;:&#39;#3c3c3c&#39;,&#39;defaultValue&#39;:&#39;支气管炎&#39;,&#39;bindData&#39;:[{&#39;VALUE&#39;:&#39;支气管&#39;,&#39;TEXT&#39;:&#39;支气管&#39;,&#39;SELECTED&#39;:false},{&#39;VALUE&#39;:&#39;支气管炎&#39;,&#39;TEXT&#39;:&#39;支气管炎&#39;,&#39;SELECTED&#39;:true}]}" contenteditable="false"><span class="oak-field oak-left" style="width:auto" contenteditable="false">[</span><span class="oak-field oak-field-value" style="color: #3c3c3c">支气管炎</span><span class="oak-field oak-right" style="width:auto" contenteditable="false">]</span></span><span style="font-size: 16px;">收住院，自发病以来，</span></span>患者精神&nbsp;<span class="oak-field oakplugin" oakplugin="select" id="jszt" title="精神状态" obj="{&#39;type&#39;:&#39;select&#39;,&#39;dynaUrl&#39;:&#39;&#39;,&#39;orgname&#39;:&#39;精神状态&#39;,&#39;orgID&#39;:&#39;jszt&#39;,&#39;color&#39;:&#39;#3c3c3c&#39;,&#39;defaultValue&#39;:&#39;&#39;,&#39;bindData&#39;:[{&#39;VALUE&#39;:&#39;好&#39;,&#39;TEXT&#39;:&#39;好&#39;,&#39;SELECTED&#39;:false},{&#39;VALUE&#39;:&#39;坏&#39;,&#39;TEXT&#39;:&#39;坏&#39;,&#39;SELECTED&#39;:false}]}" contenteditable="false" style="width: auto;"><span class="oak-field oak-left" style="width:auto" contenteditable="false">[</span><span class="oak-field oak-field-value" style="color: #3c3c3c">精神状态</span><span class="oak-field oak-right" style="width:auto" contenteditable="false">]</span></span>，饮食<span class="oak-field oakplugin" oakplugin="select" id="yszt" title="饮食状态" obj="{&#39;type&#39;:&#39;select&#39;,&#39;dynaUrl&#39;:&#39;&#39;,&#39;orgname&#39;:&#39;饮食状态&#39;,&#39;orgID&#39;:&#39;yszt&#39;,&#39;color&#39;:&#39;#ff8080&#39;,&#39;defaultValue&#39;:&#39;&#39;,&#39;bindData&#39;:[{&#39;VALUE&#39;:&#39;好&#39;,&#39;TEXT&#39;:&#39;好&#39;,&#39;SELECTED&#39;:false},{&#39;VALUE&#39;:&#39;差&#39;,&#39;TEXT&#39;:&#39;差&#39;,&#39;SELECTED&#39;:false},{&#39;VALUE&#39;:&#39;一般&#39;,&#39;TEXT&#39;:&#39;一般&#39;,&#39;SELECTED&#39;:false}]}" contenteditable="false" style="width: auto;"><span class="oak-field oak-left" style="width:auto" contenteditable="false">[</span><span class="oak-field oak-field-value" style="color: #ff8080">饮食状态</span><span class="oak-field oak-right" style="width:auto" contenteditable="false">]</span></span>，<span class="oak-field oakplugin" oakplugin="select" id="db" title="大便状态" obj="{&#39;type&#39;:&#39;select&#39;,&#39;dynaUrl&#39;:&#39;&#39;,&#39;orgname&#39;:&#39;大便状态&#39;,&#39;orgID&#39;:&#39;db&#39;,&#39;color&#39;:&#39;#3c3c3c&#39;,&#39;defaultValue&#39;:&#39;&#39;,&#39;bindData&#39;:[{&#39;VALUE&#39;:&#39;好&#39;,&#39;TEXT&#39;:&#39;好&#39;,&#39;SELECTED&#39;:false},{&#39;VALUE&#39;:&#39;坏&#39;,&#39;TEXT&#39;:&#39;坏&#39;,&#39;SELECTED&#39;:false}]}" contenteditable="false" style="width: auto;"><span class="oak-field oak-left" style="width:auto" contenteditable="false">[</span><span class="oak-field oak-field-value" style="color: #3c3c3c">大便状态</span><span class="oak-field oak-right" style="width:auto" contenteditable="false">]</span></span>，<span class="oak-field oakplugin" oakplugin="select" id="is" title="小便状态" obj="{&#39;type&#39;:&#39;select&#39;,&#39;dynaUrl&#39;:&#39;&#39;,&#39;orgname&#39;:&#39;小便状态&#39;,&#39;orgID&#39;:&#39;is&#39;,&#39;color&#39;:&#39;#3c3c3c&#39;,&#39;defaultValue&#39;:&#39;&#39;,&#39;bindData&#39;:[{&#39;VALUE&#39;:&#39;好&#39;,&#39;TEXT&#39;:&#39;好&#39;,&#39;SELECTED&#39;:false},{&#39;VALUE&#39;:&#39;坏&#39;,&#39;TEXT&#39;:&#39;坏&#39;,&#39;SELECTED&#39;:false}]}" contenteditable="false" style="width: auto;"><span class="oak-field oak-left" style="width:auto" contenteditable="false">[</span><span class="oak-field oak-field-value" style="color: #3c3c3c">小便状态</span><span class="oak-field oak-right" style="width:auto" contenteditable="false">]</span></span>；</p><p style="font-size: 16px; white-space: normal;"><span style="font-size: 16px;"><span style="font-size: 16px;"><strong>既往史&nbsp;</strong>：<span style="font-size: 16px; white-space: normal;">一般健康状况：</span><span class="oak-field oakplugin" style="width:auto" oakplugin="select" id="jkzk" title="健康状态" obj="{&#39;type&#39;:&#39;select&#39;,&#39;dynaUrl&#39;:&#39;&#39;,&#39;orgname&#39;:&#39;健康状态&#39;,&#39;orgID&#39;:&#39;jkzk&#39;,&#39;color&#39;:&#39;#3c3c3c&#39;,&#39;defaultValue&#39;:&#39;&#39;,&#39;bindData&#39;:[{&#39;VALUE&#39;:&#39;良好&#39;,&#39;TEXT&#39;:&#39;良好&#39;,&#39;SELECTED&#39;:false},{&#39;VALUE&#39;:&#39;一般&#39;,&#39;TEXT&#39;:&#39;一般&#39;,&#39;SELECTED&#39;:false}]}" contenteditable="false"><span class="oak-field oak-left" style="width:auto" contenteditable="false">[</span><span class="oak-field oak-field-value" style="color: #3c3c3c">健康状态</span><span class="oak-field oak-right" style="width:auto" contenteditable="false">]</span></span>，<strong>疾病史</strong>：<span class="oak-field oakplugin" style="width:auto" oakplugin="select" id="jbzk" title="疾病状况" obj="{&#39;type&#39;:&#39;select&#39;,&#39;dynaUrl&#39;:&#39;&#39;,&#39;orgname&#39;:&#39;疾病状况&#39;,&#39;orgID&#39;:&#39;jbzk&#39;,&#39;color&#39;:&#39;#3c3c3c&#39;,&#39;defaultValue&#39;:&#39;&#39;,&#39;bindData&#39;:[{&#39;VALUE&#39;:&#39;否认有冠心病&#39;,&#39;TEXT&#39;:&#39;否认有冠心病&#39;,&#39;SELECTED&#39;:false},{&#39;VALUE&#39;:&#39;承认有冠心病&#39;,&#39;TEXT&#39;:&#39;承认有冠心病&#39;,&#39;SELECTED&#39;:false}]}" contenteditable="false"><span class="oak-field oak-left" style="width:auto" contenteditable="false">[</span><span class="oak-field oak-field-value" style="color: #3c3c3c">疾病状况</span><span class="oak-field oak-right" style="width:auto" contenteditable="false">]</span></span>，<strong>传染史</strong>：<span class="oak-field oakplugin" style="width:auto" oakplugin="select" id="crs" title="传染史" obj="{&#39;type&#39;:&#39;select&#39;,&#39;dynaUrl&#39;:&#39;&#39;,&#39;orgname&#39;:&#39;传染史&#39;,&#39;orgID&#39;:&#39;crs&#39;,&#39;color&#39;:&#39;#3c3c3c&#39;,&#39;defaultValue&#39;:&#39;&#39;,&#39;bindData&#39;:[{&#39;VALUE&#39;:&#39;否认有肺结核&#39;,&#39;TEXT&#39;:&#39;否认有肺结核&#39;,&#39;SELECTED&#39;:false},{&#39;VALUE&#39;:&#39;承认有肺结核&#39;,&#39;TEXT&#39;:&#39;承认有肺结核&#39;,&#39;SELECTED&#39;:false}]}" contenteditable="false"><span class="oak-field oak-left" style="width:auto" contenteditable="false">[</span><span class="oak-field oak-field-value" style="color: #3c3c3c">传染史</span><span class="oak-field oak-right" style="width:auto" contenteditable="false">]</span></span>，药物</span></span></p><p style="font-size: 16px; white-space: normal;"><span style="font-size: 16px;"><span style="font-size: 16px;"><strong>过敏史</strong><span class="oak-field oakplugin" style="width:auto" oakplugin="select" id="gms" title="药物过敏史" obj="{&#39;type&#39;:&#39;select&#39;,&#39;dynaUrl&#39;:&#39;&#39;,&#39;orgname&#39;:&#39;药物过敏史&#39;,&#39;orgID&#39;:&#39;gms&#39;,&#39;color&#39;:&#39;#3c3c3c&#39;,&#39;defaultValue&#39;:&#39;&#39;,&#39;bindData&#39;:[{&#39;VALUE&#39;:&#39;否认有药物过敏史&#39;,&#39;TEXT&#39;:&#39;否认有药物过敏史&#39;,&#39;SELECTED&#39;:false},{&#39;VALUE&#39;:&#39;承认药物过敏&#39;,&#39;TEXT&#39;:&#39;承认药物过敏&#39;,&#39;SELECTED&#39;:false},{&#39;VALUE&#39;:&#39;亲霉素guomin&#39;,&#39;TEXT&#39;:&#39;亲霉素guomin&#39;,&#39;SELECTED&#39;:false}]}" contenteditable="false"><span class="oak-field oak-left" style="width:auto" contenteditable="false">[</span><span class="oak-field oak-field-value" style="color: #3c3c3c">药物过敏史</span><span class="oak-field oak-right" style="width:auto" contenteditable="false">]</span></span>,</span></span></p><p style="font-size: 16px; white-space: normal;"><span style="font-size: 16px;"><span style="font-size: 16px;"><strong style="font-size: 16px; white-space: normal;">个人史</strong><span style="font-size: 16px; white-space: normal;">：出生于<span class="oak-field oakplugin" style="width:auto" oakplugin="select" id="cs" title="出生地址" obj="{&#39;type&#39;:&#39;select&#39;,&#39;dynaUrl&#39;:&#39;&#39;,&#39;orgname&#39;:&#39;出生地址&#39;,&#39;orgID&#39;:&#39;cs&#39;,&#39;color&#39;:&#39;#3c3c3c&#39;,&#39;defaultValue&#39;:&#39;&#39;,&#39;bindData&#39;:[{&#39;VALUE&#39;:&#39;新加坡&#39;,&#39;TEXT&#39;:&#39;新加坡&#39;,&#39;SELECTED&#39;:false},{&#39;VALUE&#39;:&#39;美国&#39;,&#39;TEXT&#39;:&#39;美国&#39;,&#39;SELECTED&#39;:false},{&#39;VALUE&#39;:&#39;北京&#39;,&#39;TEXT&#39;:&#39;北京&#39;,&#39;SELECTED&#39;:false}]}" contenteditable="false"><span class="oak-field oak-left" style="width:auto" contenteditable="false">[</span><span class="oak-field oak-field-value" style="color: #3c3c3c">出生地址</span><span class="oak-field oak-right" style="width:auto" contenteditable="false">]</span></span>，吸烟史<span class="oak-field oakplugin" style="width:auto" oakplugin="select" id="xys" title="吸烟史" obj="{&#39;type&#39;:&#39;select&#39;,&#39;dynaUrl&#39;:&#39;&#39;,&#39;orgname&#39;:&#39;吸烟史&#39;,&#39;orgID&#39;:&#39;xys&#39;,&#39;color&#39;:&#39;#3c3c3c&#39;,&#39;defaultValue&#39;:&#39;&#39;,&#39;bindData&#39;:[{&#39;VALUE&#39;:&#39;有&#39;,&#39;TEXT&#39;:&#39;有&#39;,&#39;SELECTED&#39;:false},{&#39;VALUE&#39;:&#39;没有&#39;,&#39;TEXT&#39;:&#39;没有&#39;,&#39;SELECTED&#39;:false}]}" contenteditable="false"><span class="oak-field oak-left" style="width:auto" contenteditable="false">[</span><span class="oak-field oak-field-value" style="color: #3c3c3c">吸烟史</span><span class="oak-field oak-right" style="width:auto" contenteditable="false">]</span></span></span></span></span></p><p style="font-size: 16px; white-space: normal;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p><p style="text-align: center;"><strong><span style="font-size: 16px;">体 &nbsp;格 &nbsp;检 &nbsp;查</span></strong></p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p><table><tbody><tr class="firstRow"><td width="98" valign="middle" style="word-break: break-all;" align="center"><strong><span style="font-size: 16px;">项目</span></strong></td><td width="382" valign="middle" style="word-break: break-all;" align="center"><span style="font-size: 16px;"><strong>完成情况</strong></span></td><td width="240" valign="middle" style="word-break: break-all;" align="center"><strong><span style="font-size: 16px;">时间</span></strong></td></tr><tr><td width="98" valign="top" style="word-break: break-all;"><span style="white-space: normal; font-size: 14px;">①进餐</span></td><td width="382" valign="top"><span class="oak-field oakplugin" style="width:auto" oakplugin="checkbox" id="jincan" title="进餐" orgchecked="vertical" obj="{&#39;dynaUrl&#39;:&#39;&#39;,&#39;type&#39;:&#39;checkbox&#39;,&#39;orgname&#39;:&#39;进餐&#39;,&#39;orgID&#39;:&#39;jincan&#39;,&#39;bindData&#39;:[{&#39;VALUE&#39;:&#39;事物放在盘子上，在正常时间内完成就餐（10分）&#39;,&#39;TEXT&#39;:&#39;事物放在盘子上，在正常时间内完成就餐（10分）&#39;,&#39;SELECTED&#39;:false},{&#39;VALUE&#39;:&#39;需要帮助或较长时间才能完成（5分）&#39;,&#39;TEXT&#39;:&#39;需要帮助或较长时间才能完成（5分）&#39;,&#39;SELECTED&#39;:false}]}" contenteditable="false"><span class="oak-field oak-left" style="width:auto" contenteditable="false">[</span><label class="oak-field"><input class="oak-field" name="jincan1500629514469" value="事物放在盘子上，在正常时间内完成就餐（10分）" type="checkbox"/>事物放在盘子上，在正常时间内完成就餐（10分）</label><br/><label class="oak-field"><input class="oak-field" name="jincan1500629514469" value="需要帮助或较长时间才能完成（5分）" type="checkbox"/>需要帮助或较长时间才能完成（5分）</label><br/><span class="oak-field oak-right" style="width:auto" contenteditable="false">]</span></span></td><td width="240" valign="top"><span class="oak-field oakplugin" style="width:auto" oakplugin="timeinput" id="" title="进餐时间" obj="{&#39;orgname&#39;:&#39;进餐时间&#39;,&#39;orgID&#39;:&#39;&#39;,&#39;defaultValue&#39;:&#39;2017-07-13 08:00:00&#39;,&#39;minDate&#39;:&#39;&#39;,&#39;maxDate&#39;:&#39;&#39;,&#39;defaultValue_1&#39;:&#39;2017-07-13 08:00:00&#39;,&#39;minDate_1&#39;:&#39;&#39;,&#39;maxDate_1&#39;:&#39;&#39;,&#39;textType&#39;:&#39;yyyy-MM-dd HH:mm:ss&#39;,&#39;width&#39;:&#39;150&#39;,&#39;fontSize&#39;:&#39;16&#39;,&#39;color&#39;:&#39;#3c3c3c&#39;,&#39;vel&#39;:&#39;1500883871267&#39;}" contenteditable="false"><span class="oak-field oak-left" style="width:auto" contenteditable="false">[</span><input class="oak-field oak-field-value" style="width:100px;min-height:16px;min-width:150px;font-size:16px;color:#3c3c3c;" value="2017-07-13 08:00:00" onclick="if(document.body.getAttribute(&#39;pattern&#39;)==&#39;readonly&#39;){return;}WdatePicker({dateFmt:&#39;yyyy-MM-dd HH:mm:ss&#39;,vel:&#39;1500883871267&#39;,minDate:&#39;&#39;,maxDate:&#39;&#39;})"/><input type="hidden" id="1500883871267" value="2017-07-13 08:00:00"/><span class="oak-field oak-right" style="width:auto" contenteditable="false">]</span></span></td></tr><tr><td valign="top" colspan="1" rowspan="1" style="word-break: break-all;" width="98"><span style="white-space: normal; font-size: 14px;">②修饰</span></td><td valign="top" colspan="1" rowspan="1" width="382"><span class="oak-field oakplugin" style="width:auto" oakplugin="checkbox" id="xiusi" title="修饰" orgchecked="horizontal" obj="{&#39;dynaUrl&#39;:&#39;&#39;,&#39;type&#39;:&#39;checkbox&#39;,&#39;orgname&#39;:&#39;修饰&#39;,&#39;orgID&#39;:&#39;xiusi&#39;,&#39;bindData&#39;:[{&#39;VALUE&#39;:&#39;独立完成各项（洗脸、刷牙、梳头） 5分	&#39;,&#39;TEXT&#39;:&#39;独立完成各项（洗脸、刷牙、梳头） 5分	&#39;,&#39;SELECTED&#39;:false}]}" contenteditable="false"><span class="oak-field oak-left" style="width:auto" contenteditable="false">[</span><label class="oak-field"><input class="oak-field" name="xiusi1500629595546" value="独立完成各项（洗脸、刷牙、梳头） 5分	" type="checkbox"/>独立完成各项（洗脸、刷牙、梳头） 5分	</label><span class="oak-field oak-right" style="width:auto" contenteditable="false">]</span></span></td><td valign="top" colspan="1" rowspan="1"><span class="oak-field oakplugin" style="width:auto" oakplugin="timeinput" id="" title="修饰时间" obj="{&#39;orgname&#39;:&#39;修饰时间&#39;,&#39;orgID&#39;:&#39;&#39;,&#39;defaultValue&#39;:&#39;2017-07-10 17:34:25&#39;,&#39;minDate&#39;:&#39;&#39;,&#39;maxDate&#39;:&#39;&#39;,&#39;defaultValue_1&#39;:&#39;2017-07-10 17:34:25&#39;,&#39;minDate_1&#39;:&#39;&#39;,&#39;maxDate_1&#39;:&#39;&#39;,&#39;textType&#39;:&#39;yyyy-MM-dd HH:mm:ss&#39;,&#39;width&#39;:&#39;150&#39;,&#39;fontSize&#39;:&#39;16&#39;,&#39;color&#39;:&#39;#3c3c3c&#39;,&#39;vel&#39;:&#39;1500629671571&#39;}" contenteditable="false"><span class="oak-field oak-left" style="width:auto" contenteditable="false">[</span><input class="oak-field oak-field-value" style="width:100px;min-height:16px;min-width:150px;font-size:16px;color:#3c3c3c;" value="2017-07-10 17:34:25" onclick="if(this.nodeType!=1)return;if(document.body.getAttribute(&#39;pattern&#39;)==&#39;readonly&#39;){this.setAttribute(&#39;readonly&#39;,&#39;readonly&#39;);return;}else{this.removeAttribute(&#39;readonly&#39;);}WdatePicker({dateFmt:&#39;yyyy-MM-dd HH:mm:ss&#39;,vel:&#39;1500629671571&#39;,minDate:&#39;&#39;,maxDate:&#39;&#39;})"/><input type="hidden" id="1500629671571" value="2017-07-18 17:34:25"/><span class="oak-field oak-right" style="width:auto" contenteditable="false">]</span></span></td></tr><tr><td valign="top" colspan="1" rowspan="1" style="word-break: break-all;" width="98"><span style="white-space: normal; font-size: 14px;">③洗澡</span></td><td valign="top" colspan="1" rowspan="1" width="382"><span class="oak-field oakplugin" style="width:auto" oakplugin="checkbox" id="xz" title="洗澡" orgchecked="horizontal" obj="{&#39;dynaUrl&#39;:&#39;&#39;,&#39;type&#39;:&#39;checkbox&#39;,&#39;orgname&#39;:&#39;洗澡&#39;,&#39;orgID&#39;:&#39;xz&#39;,&#39;bindData&#39;:[{&#39;VALUE&#39;:&#39;可独立完成所有步骤 5分&#39;,&#39;TEXT&#39;:&#39;可独立完成所有步骤 5分&#39;,&#39;SELECTED&#39;:false}]}" contenteditable="false"><span class="oak-field oak-left" style="width:auto" contenteditable="false">[</span><label class="oak-field"><input class="oak-field" name="xz1500629622858" value="可独立完成所有步骤 5分" type="checkbox"/>可独立完成所有步骤 5分</label><span class="oak-field oak-right" style="width:auto" contenteditable="false">]</span></span></td><td valign="top" colspan="1" rowspan="1"><span class="oak-field oakplugin" style="width:auto" oakplugin="timeinput" id="" title="洗澡时间" obj="{&#39;orgname&#39;:&#39;洗澡时间&#39;,&#39;orgID&#39;:&#39;&#39;,&#39;defaultValue&#39;:&#39;2017-07-10 08:00:00&#39;,&#39;minDate&#39;:&#39;&#39;,&#39;maxDate&#39;:&#39;&#39;,&#39;defaultValue_1&#39;:&#39;2017-07-10&#39;,&#39;minDate_1&#39;:&#39;&#39;,&#39;maxDate_1&#39;:&#39;&#39;,&#39;textType&#39;:&#39;yyyy-MM-dd HH:mm:ss&#39;,&#39;width&#39;:&#39;150&#39;,&#39;fontSize&#39;:&#39;16&#39;,&#39;color&#39;:&#39;#3c3c3c&#39;,&#39;vel&#39;:&#39;1500629689553&#39;}" contenteditable="false"><span class="oak-field oak-left" style="width:auto" contenteditable="false">[</span><input class="oak-field oak-field-value" style="width:100px;min-height:16px;min-width:150px;font-size:16px;color:#3c3c3c;" value="2017-07-10 08:00:00" onclick="if(document.body.getAttribute(&#39;pattern&#39;)==&#39;readonly&#39;){return;}WdatePicker({dateFmt:&#39;yyyy-MM-dd HH:mm:ss&#39;,vel:&#39;1500629689553&#39;,minDate:&#39;&#39;,maxDate:&#39;&#39;})"/><input type="hidden" id="1500629689553" value="2017-07-28 08:00:00"/><span class="oak-field oak-right" style="width:auto" contenteditable="false">]</span></span></td></tr></tbody></table><p><br/></p><p><br/></p><p><span style="color:#808080"><span style="font-size: 13px;"><br/></span></span></p>';
export default innerHtml;
