(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    276: function(e, t, a) {
      e.exports = a(495);
    },
    285: function(e, t, a) {},
    286: function(e, t, a) {},
    314: function(e, t, a) {},
    492: function(e, t, a) {},
    493: function(e, t, a) {},
    494: function(e, t, a) {},
    495: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(1),
        r = a.n(n),
        c = a(20),
        o = a.n(c),
        i = a(22),
        l = a(21),
        s = a(24),
        u = a(23),
        m = a(25),
        f = a(31),
        p = a(48),
        d = a(60),
        b = a(550),
        h = a(232),
        g = a.n(h),
        E = a(233),
        v = a.n(E),
        k = a(133),
        O = a.n(k),
        j = a(66),
        S = a.n(j),
        T = a(533),
        y = a(534),
        N = a(535),
        x = a(536),
        C = a(537),
        w =
          (a(285),
          function() {
            return r.a.createElement(
              'div',
              { className: 'not-found__wrapper' },
              r.a.createElement('div', null, ' 404 ')
            );
          }),
        _ = a(38),
        D = 10,
        R = 15,
        H = { MIN: 10, MAX: 90 },
        I = 6e4,
        M = '/',
        A = '/tasks/',
        F = '/tasks/log',
        B = '/tasks/chart',
        K = a(53),
        L = a.n(K),
        V = function(e) {
          return !(arguments.length > 1 && void 0 !== arguments[1]) ||
            arguments[1]
            ? Number(localStorage.getItem(e))
            : JSON.parse(localStorage.getItem(e));
        },
        U = function(e, t) {
          return !(arguments.length > 2 && void 0 !== arguments[2]) ||
            arguments[2]
            ? localStorage.setItem(e, t)
            : localStorage.setItem(e, JSON.stringify(t));
        },
        W = function() {
          return new Date().getTime();
        },
        J = function(e, t) {
          return t
            ? L.a.utc(+e).format('HH:mm:ss')
            : L()(+e).format('HH:mm:ss');
        },
        Y = function() {
          for (
            var e = new Date(),
              t = z(D, R),
              a = Number(
                new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime()
              ),
              n = [],
              r = 0;
            r < t;
            r++
          ) {
            var c = X(a);
            n.push({
              taskName: 'Task '.concat(r),
              timeStart: a,
              timeEnd: c,
              timeSpend: c - a,
            }),
              (a = X(c));
          }
          return n;
        };
      function X(e) {
        return e + z(H.MIN, H.MAX) * I;
      }
      function z(e, t) {
        return Math.round(Math.random() * (t - e) + e);
      }
      var G = function(e) {
          return e.map(function(e) {
            return {
              startHour: Number(L()(e.timeStart).format('H')),
              startMin: Number(L()(e.timeStart).format('m')),
              startSec: Number(L()(e.timeStart).format('s')),
              endHour: Number(L()(e.timeEnd).format('H')),
              endMin: Number(L()(e.timeEnd).format('m')),
              endSec: Number(L()(e.timeEnd).format('s')),
            };
          });
        },
        P = function(e, t) {
          var a = Object(_.a)(e),
            n = !0,
            r = !1,
            c = void 0;
          try {
            for (
              var o, i = t[Symbol.iterator]();
              !(n = (o = i.next()).done);
              n = !0
            ) {
              var l = o.value,
                s = l.endHour - l.startHour;
              if (s > 0) {
                for (var u = l.startHour; u < l.endHour; u++)
                  l.startHour === u
                    ? (a[u].uv += 60 - l.startMin)
                    : (a[u].uv += 60);
                a[l.endHour].uv += l.endMin;
              } else 0 === s && (a[l.endHour].uv += l.endMin - l.startMin);
            }
          } catch (m) {
            (r = !0), (c = m);
          } finally {
            try {
              n || null == i.return || i.return();
            } finally {
              if (r) throw c;
            }
          }
          return a;
        },
        $ = function() {
          for (var e = [], t = 0; t < 24; t++) e.push({ name: t, uv: 0 });
          return e;
        },
        q = function(e, t) {
          return { type: e, payload: t };
        },
        Q =
          (a(286),
          (function(e) {
            function t() {
              return (
                Object(i.a)(this, t),
                Object(s.a)(this, Object(u.a)(t).apply(this, arguments))
              );
            }
            return (
              Object(m.a)(t, e),
              Object(l.a)(t, [
                {
                  key: 'render',
                  value: function() {
                    var e = this.props,
                      t = e.tasks[e.match.params.id];
                    return (
                      console.log('task: ', t),
                      r.a.createElement(
                        r.a.Fragment,
                        null,
                        'undefined' !== typeof t
                          ? r.a.createElement(
                              'div',
                              { className: 'task-info__wrapper' },
                              r.a.createElement(
                                T.a,
                                { className: 'task-info__card' },
                                r.a.createElement(y.a, {
                                  title: ''.concat(t.taskName),
                                }),
                                r.a.createElement(
                                  N.a,
                                  null,
                                  r.a.createElement(
                                    g.a,
                                    null,
                                    r.a.createElement(
                                      v.a,
                                      null,
                                      r.a.createElement(
                                        O.a,
                                        null,
                                        r.a.createElement(
                                          S.a,
                                          { align: 'left' },
                                          ' Time start: '
                                        ),
                                        r.a.createElement(
                                          S.a,
                                          { align: 'left' },
                                          J(t.timeStart)
                                        )
                                      ),
                                      r.a.createElement(
                                        O.a,
                                        null,
                                        r.a.createElement(
                                          S.a,
                                          { align: 'left' },
                                          ' Time end: '
                                        ),
                                        r.a.createElement(
                                          S.a,
                                          { align: 'left' },
                                          J(t.timeEnd)
                                        )
                                      ),
                                      r.a.createElement(
                                        O.a,
                                        null,
                                        r.a.createElement(
                                          S.a,
                                          { align: 'left' },
                                          ' Time spend: '
                                        ),
                                        r.a.createElement(
                                          S.a,
                                          { align: 'left' },
                                          J(t.timeSpend, !0)
                                        )
                                      )
                                    )
                                  )
                                ),
                                r.a.createElement(
                                  x.a,
                                  { style: { justifyContent: 'flex-end' } },
                                  r.a.createElement(
                                    p.b,
                                    { to: F },
                                    r.a.createElement(
                                      C.a,
                                      { size: 'small' },
                                      ' Back '
                                    )
                                  )
                                )
                              )
                            )
                          : r.a.createElement(w, null)
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(r.a.Component)),
        Z = Object(f.b)(function(e) {
          return { tasks: e.tasks };
        })(Object(d.f)(Q)),
        ee = a(26),
        te = a.n(ee),
        ae = a(123),
        ne = a(97),
        re = a(249),
        ce = a(551),
        oe = a(126),
        ie = a.n(oe),
        le = 'SET_TASK',
        se = 'REMOVE_TASK',
        ue = function(e) {
          return q(le, e);
        },
        me = V('tasks', !1) || [],
        fe = a(554),
        pe = a(541),
        de = a(539),
        be = a(540),
        he = a(538),
        ge = (function(e) {
          function t() {
            return (
              Object(i.a)(this, t),
              Object(s.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(t, e),
            Object(l.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.dialogTitle,
                    a = void 0 === t ? '' : t,
                    n = e.dialogContentText,
                    c = e.isOpenDialog,
                    o = e.clickDialogClose,
                    i = e.clickDialogSuccess,
                    l = e.btnSuccessText,
                    s = void 0 === l ? 'Close' : l,
                    u = e.btnRejectText,
                    m = void 0 === u ? null : u;
                  return r.a.createElement(
                    fe.a,
                    {
                      fullWidth: !0,
                      maxWidth: 'sm',
                      open: c,
                      onClose: o,
                      'aria-labelledby': 'form-dialog-title',
                    },
                    r.a.createElement(
                      he.a,
                      {
                        id: 'form-dialog-title',
                        style: { textAlign: 'center' },
                      },
                      a
                    ),
                    r.a.createElement(
                      de.a,
                      null,
                      r.a.createElement(be.a, null, n),
                      this.props.children
                    ),
                    r.a.createElement(
                      pe.a,
                      {
                        style: {
                          justifyContent:
                            null === m ? 'flex-end' : 'space-between',
                        },
                      },
                      null !== m
                        ? r.a.createElement(
                            C.a,
                            { onClick: o, color: 'primary' },
                            m
                          )
                        : null,
                      r.a.createElement(
                        C.a,
                        { onClick: i, color: 'primary' },
                        s
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(r.a.Component),
        Ee =
          (a(314),
          (function(e) {
            function t() {
              var e;
              return (
                Object(i.a)(this, t),
                ((e = Object(s.a)(
                  this,
                  Object(u.a)(t).call(this)
                )).toggleStatusTimer = function(t, a, n) {
                  e.state.isStartTimer
                    ? '' === e.state.taskName
                      ? e._toggleDialogTaskNoName(!0)
                      : (a(), e._addTaskLog(n))
                    : (t(),
                      U('isStartTimer', 1),
                      U('timeStart', W()),
                      e.setState({ isStartTimer: !0 }));
                }),
                (e.handleChangeTaskName = function(t) {
                  e.setState({ taskName: t.target.value });
                }),
                (e._addTaskLog = function(t) {
                  var a = e.state.taskName,
                    n = V('timeStart'),
                    r = W() - n,
                    c = n + r;
                  r < 1e3 && n && (r = 1e3),
                    e.props.setTask({
                      taskName: a,
                      timeStart: n,
                      timeEnd: c,
                      timeSpend: r,
                    }),
                    e.setState({
                      taskName: '',
                      initialTime: 0,
                      isStartTimer: !1,
                      isOpenDialogNoName: !1,
                    }),
                    U('timeSpend', 0),
                    U('isStartTimer', 0),
                    t();
                }),
                (e._toggleDialogTaskNoName = function(t) {
                  return e.setState({ isOpenDialogNoName: t });
                }),
                (e._getFormatValue = function(e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : ':';
                  return ''.concat(e < 10 ? '0'.concat(e) : e).concat(t);
                }),
                (e.state = {
                  taskName: '',
                  initialTime: 0,
                  isStartTimer: !1,
                  isOpenDialogNoName: !1,
                }),
                e
              );
            }
            return (
              Object(m.a)(t, e),
              Object(l.a)(t, [
                {
                  key: 'componentDidMount',
                  value: (function() {
                    var e = Object(ae.a)(
                      te.a.mark(function e() {
                        var t, a, n;
                        return te.a.wrap(
                          function(e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (t = V('isStartTimer')),
                                    (a = V('timeSpend')),
                                    (n = t ? W() - V('timeStart') + a : a),
                                    (e.next = 5),
                                    this.setState({
                                      initialTime: n,
                                      isStartTimer: t,
                                    })
                                  );
                                case 5:
                                case 'end':
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function() {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: 'render',
                  value: function() {
                    var e = this,
                      t = this.state,
                      a = t.taskName,
                      n = t.initialTime,
                      c = t.isStartTimer,
                      o = t.isOpenDialogNoName;
                    return r.a.createElement(
                      'div',
                      { className: 'timer__wrapper' },
                      r.a.createElement(ge, {
                        isOpenDialog: o,
                        clickDialogOpen: function() {
                          return e._toggleDialogTaskNoName(!0);
                        },
                        clickDialogClose: function() {
                          return e._toggleDialogTaskNoName(!1);
                        },
                        clickDialogSuccess: function() {
                          return e._toggleDialogTaskNoName(!1);
                        },
                        dialogTitle: 'Empty task name',
                        dialogContentText:
                          'You are trying close your task without name, please enter the title and try gain!',
                      }),
                      r.a.createElement(
                        ne.a,
                        {
                          initialTime: n,
                          startImmediately: c,
                          formatValue: function(t) {
                            return e._getFormatValue(t);
                          },
                        },
                        function(t) {
                          var n = t.start,
                            o = t.stop,
                            i = t.reset;
                          return r.a.createElement(
                            r.a.Fragment,
                            null,
                            r.a.createElement(ce.a, {
                              value: a,
                              onChange: e.handleChangeTaskName,
                              placeholder: 'Name of your task',
                              className: 'timer__input',
                            }),
                            r.a.createElement(
                              re.a,
                              { className: 'timer' },
                              r.a.createElement(ne.a.Hours, {
                                formatValue: function(t) {
                                  return e._getFormatValue(t);
                                },
                              }),
                              r.a.createElement(ne.a.Minutes, null),
                              r.a.createElement(ne.a.Seconds, {
                                formatValue: function(t) {
                                  return e._getFormatValue(t, '');
                                },
                              })
                            ),
                            r.a.createElement(
                              ie.a,
                              {
                                variant: 'contained',
                                className: 'btn',
                                onClick: function() {
                                  return e.toggleStatusTimer(n, o, i);
                                },
                              },
                              c ? 'Stop' : 'Start'
                            )
                          );
                        }
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(r.a.Component)),
        ve = { setTask: ue },
        ke = Object(f.b)(function(e) {
          return { tasks: e.tasks };
        }, ve)(Ee),
        Oe = a(548),
        je = a(552),
        Se = a(549),
        Te = a(544),
        ye = a(545),
        Ne = a(547),
        xe = a(543),
        Ce = a(546),
        we = a(542),
        _e = (function(e) {
          function t() {
            return (
              Object(i.a)(this, t),
              Object(s.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(t, e),
            Object(l.a)(t, [
              {
                key: 'render',
                value: function() {
                  return r.a.createElement(
                    we.a,
                    null,
                    r.a.createElement(
                      xe.a,
                      { align: 'center', colSpan: '7' },
                      'Tasks Not Found'
                    )
                  );
                },
              },
            ]),
            t
          );
        })(r.a.Component),
        De = (function(e) {
          function t() {
            return (
              Object(i.a)(this, t),
              Object(s.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(t, e),
            Object(l.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.styleButton,
                    a = e.index;
                  return r.a.createElement(
                    p.b,
                    { to: ''.concat(A).concat(a) },
                    r.a.createElement(
                      C.a,
                      { variant: 'contained', style: t },
                      'Info'
                    )
                  );
                },
              },
            ]),
            t
          );
        })(r.a.Component),
        Re = (function(e) {
          function t() {
            var e;
            return (
              Object(i.a)(this, t),
              ((e = Object(s.a)(
                this,
                Object(u.a)(t).call(this)
              ))._toggleDialogRemove = function(t) {
                return e.setState({ isOpenDialogRemove: t });
              }),
              (e.state = { isOpenDialogRemove: !1 }),
              e
            );
          }
          return (
            Object(m.a)(t, e),
            Object(l.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.state.isOpenDialogRemove,
                    a = this.props,
                    n = a.styleButton,
                    c = a.taskIndex,
                    o = a.removeTask;
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      C.a,
                      {
                        variant: 'contained',
                        style: n,
                        onClick: function() {
                          return e._toggleDialogRemove(!0);
                        },
                      },
                      'Delete'
                    ),
                    r.a.createElement(ge, {
                      isOpenDialog: t,
                      clickDialogClose: function() {
                        return e._toggleDialogRemove(!1);
                      },
                      clickDialogSuccess: function() {
                        e._toggleDialogRemove(!1), o(c);
                      },
                      btnRejectText: 'No',
                      btnSuccessText: 'Yes',
                      dialogTitle: 'You are sure?',
                    })
                  );
                },
              },
            ]),
            t
          );
        })(r.a.Component),
        He = {
          removeTask: function(e) {
            return q(se, e);
          },
        },
        Ie = Object(f.b)(null, He)(Re),
        Me = { background: 'white', borderRadius: 0 },
        Ae = (function(e) {
          function t() {
            var e, a;
            Object(i.a)(this, t);
            for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++)
              r[c] = arguments[c];
            return (
              ((a = Object(s.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(r))
              ))._getTimeEnd = function(e) {
                return J(e.timeStart) === J(e.timeEnd)
                  ? J(e.timeEnd + 1e3)
                  : J(e.timeEnd);
              }),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(l.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this;
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    this.props.tasks.map(function(t, a) {
                      return r.a.createElement(
                        we.a,
                        { key: 'task-body-'.concat(a) },
                        r.a.createElement(
                          xe.a,
                          { component: 'th', scope: 'row' },
                          ++a
                        ),
                        r.a.createElement(xe.a, { align: 'left' }, t.taskName),
                        r.a.createElement(
                          xe.a,
                          { align: 'center' },
                          J(t.timeStart)
                        ),
                        r.a.createElement(
                          xe.a,
                          { align: 'center' },
                          e._getTimeEnd(t)
                        ),
                        r.a.createElement(
                          xe.a,
                          { align: 'center' },
                          J(t.timeSpend, !0)
                        ),
                        r.a.createElement(
                          xe.a,
                          { align: 'center' },
                          r.a.createElement(De, {
                            index: --a,
                            task: t,
                            styleButton: Me,
                            getFormatTime: J,
                          })
                        ),
                        r.a.createElement(
                          xe.a,
                          { align: 'center' },
                          r.a.createElement(Ie, {
                            taskIndex: a,
                            styleButton: Me,
                          })
                        )
                      );
                    })
                  );
                },
              },
            ]),
            t
          );
        })(r.a.Component),
        Fe = Object(f.b)(function(e) {
          return { tasks: e.tasks };
        })(Ae),
        Be = Object(Te.a)(function() {
          return {
            root: { width: '100%', overflowX: 'auto', borderRadius: 0 },
            table: { minWidth: 650 },
          };
        }),
        Ke = [
          '\u2116',
          'Tasks',
          'Time start',
          'Time end',
          'Time Spend',
          'Info',
          'Delete',
        ],
        Le = Object(f.b)(function(e) {
          return { tasks: e.tasks };
        })(function(e) {
          var t = e.tasks,
            a = Be();
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              re.a,
              { className: a.root },
              r.a.createElement(
                ye.a,
                { className: a.table },
                r.a.createElement(
                  Ce.a,
                  null,
                  r.a.createElement(
                    we.a,
                    null,
                    Ke.map(function(e, t) {
                      return r.a.createElement(
                        xe.a,
                        { key: 'task-header-'.concat(t), align: 'center' },
                        e
                      );
                    })
                  )
                ),
                r.a.createElement(
                  Ne.a,
                  null,
                  t.length
                    ? r.a.createElement(Fe, null)
                    : r.a.createElement(_e, null)
                )
              )
            )
          );
        }),
        Ve = a(67),
        Ue = 'BUILD_CHART',
        We = function() {
          return q(Ue);
        },
        Je = function() {
          return q('BUILD_CHART_RESET');
        },
        Ye = function(e) {
          return q('BUILD_CHART_SUCCESS', e);
        },
        Xe = $(),
        ze = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Xe,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case 'BUILD_CHART_SUCCESS':
              return t.payload;
            case 'BUILD_CHART_RESET':
              return $();
            default:
              return e;
          }
        },
        Ge =
          (a(492),
          (function(e) {
            function t() {
              var e, a;
              Object(i.a)(this, t);
              for (
                var n = arguments.length, r = new Array(n), c = 0;
                c < n;
                c++
              )
                r[c] = arguments[c];
              return (
                ((a = Object(s.a)(
                  this,
                  (e = Object(u.a)(t)).call.apply(e, [this].concat(r))
                ))._generate = Object(ae.a)(
                  te.a.mark(function e() {
                    var t;
                    return te.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), a.props.resetTasks();
                          case 2:
                            return (e.next = 4), Y();
                          case 4:
                            return (
                              (t = e.sent),
                              U('tasks', t, !1),
                              (e.next = 8),
                              a.props.refreshTasks(t)
                            );
                          case 8:
                            a.props.buildChart();
                          case 9:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })
                )),
                a
              );
            }
            return (
              Object(m.a)(t, e),
              Object(l.a)(t, [
                {
                  key: 'render',
                  value: function() {
                    var e = this;
                    return r.a.createElement(
                      ie.a,
                      {
                        variant: 'contained',
                        className: 'btn btn__generate',
                        onClick: function() {
                          return e._generate();
                        },
                      },
                      'Generate'
                    );
                  },
                },
              ]),
              t
            );
          })(r.a.Component)),
        Pe = {
          setTask: ue,
          refreshTasks: function(e) {
            return q('REFRESH_TASKS', e);
          },
          resetTasks: function(e) {
            return q('RESET_TASKS', e);
          },
          buildChart: We,
        },
        $e = Object(f.b)(null, Pe)(Ge),
        qe = (function(e) {
          function t() {
            return (
              Object(i.a)(this, t),
              Object(s.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(t, e),
            Object(l.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.props.buildChart();
                },
              },
              {
                key: 'render',
                value: function() {
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      Ve.d,
                      { width: '100%', height: 300 },
                      r.a.createElement(
                        Ve.b,
                        { data: this.props.chartColumns },
                        r.a.createElement(Ve.c, { stroke: '#ccc' }),
                        r.a.createElement(Ve.e, { dataKey: 'name' }),
                        r.a.createElement(Ve.f, { domain: [0, 60] }),
                        r.a.createElement(Ve.a, {
                          type: 'monotone',
                          dataKey: 'uv',
                          barSize: 30,
                          fill: '#8884d8',
                          label: Qe,
                        })
                      )
                    ),
                    r.a.createElement($e, null)
                  );
                },
              },
            ]),
            t
          );
        })(n.PureComponent),
        Qe = function(e) {
          e.payload;
          var t = e.x,
            a = e.y,
            n = e.width,
            c = (e.height, e.value);
          if (c > 0) {
            var o = 16,
              i = '#fff';
            return (
              c <= 5 && ((o = -6), (i = '#000')),
              r.a.createElement(
                'text',
                { x: t + n / 2, y: a, fill: i, textAnchor: 'middle', dy: o },
                c
              )
            );
          }
          return null;
        },
        Ze = { buildChart: We },
        et = Object(f.b)(function(e) {
          return { chartColumns: e.chartColumns };
        }, Ze)(qe),
        tt =
          (a(493),
          (function(e) {
            function t() {
              var e;
              return (
                Object(i.a)(this, t),
                ((e = Object(s.a)(
                  this,
                  Object(u.a)(t).call(this)
                )).handleChange = function(t, a) {
                  e.setState({ activeTabIndex: a });
                }),
                (e.state = { activeTabIndex: 0 }),
                e
              );
            }
            return (
              Object(m.a)(t, e),
              Object(l.a)(t, [
                {
                  key: 'componentDidMount',
                  value: function() {
                    this.setState({
                      activeTabIndex:
                        this.props.location.pathname === B ? 1 : 0,
                    });
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    var e = this.state.activeTabIndex;
                    return r.a.createElement(
                      'div',
                      { className: 'tabs__wrapper' },
                      r.a.createElement(
                        Oe.a,
                        { position: 'static' },
                        r.a.createElement(
                          je.a,
                          {
                            variant: 'fullWidth',
                            value: e,
                            onChange: this.handleChange,
                          },
                          r.a.createElement(Se.a, {
                            label: 'Task Log',
                            component: p.b,
                            to: F,
                          }),
                          r.a.createElement(Se.a, {
                            label: 'Task Chart',
                            component: p.b,
                            to: B,
                          })
                        )
                      ),
                      r.a.createElement(
                        d.c,
                        null,
                        r.a.createElement(d.a, {
                          exact: !0,
                          path: [F, M],
                          component: Le,
                        }),
                        r.a.createElement(d.a, {
                          exact: !0,
                          path: B,
                          component: et,
                        })
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(r.a.Component)),
        at = Object(d.f)(tt),
        nt = a(43),
        rt = Object(nt.combineReducers)({
          tasks: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : me,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case le:
                return [].concat(Object(_.a)(e), [t.payload]);
              case se:
                return [].concat(
                  Object(_.a)(e.slice(0, t.payload)),
                  Object(_.a)(e.slice(t.payload + 1))
                );
              case 'REFRESH_TASKS':
                return t.payload;
              case 'RESET_TASKS':
                return [];
              default:
                return e;
            }
          },
          chartColumns: ze,
        }),
        ct = a(247),
        ot = a(248),
        it = a(34),
        lt = te.a.mark(ut),
        st = te.a.mark(mt);
      function ut() {
        var e, t, a, n, r;
        return te.a.wrap(
          function(c) {
            for (;;)
              switch ((c.prev = c.next)) {
                case 0:
                  return (c.prev = 0), (c.next = 3), Object(it.c)(Je());
                case 3:
                  return (c.next = 5), Object(it.d)();
                case 5:
                  return (
                    (e = c.sent),
                    (t = e.tasks),
                    (a = e.chartColumns),
                    (c.next = 10),
                    Object(it.b)(function() {
                      return G(t);
                    })
                  );
                case 10:
                  return (
                    (n = c.sent),
                    (c.next = 13),
                    Object(it.b)(function() {
                      return P(a, n);
                    })
                  );
                case 13:
                  return (r = c.sent), (c.next = 16), Object(it.c)(Ye(r));
                case 16:
                  c.next = 21;
                  break;
                case 18:
                  (c.prev = 18),
                    (c.t0 = c.catch(0)),
                    console.log('error: ', c.t0);
                case 21:
                case 'end':
                  return c.stop();
              }
          },
          lt,
          null,
          [[0, 18]]
        );
      }
      function mt() {
        return te.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(it.e)(Ue, ut);
              case 2:
              case 'end':
                return e.stop();
            }
        }, st);
      }
      var ft = te.a.mark(bt),
        pt = te.a.mark(ht),
        dt = te.a.mark(gt);
      function bt() {
        var e, t;
        return te.a.wrap(
          function(a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (a.prev = 0), (a.next = 3), Object(it.d)();
                case 3:
                  (e = a.sent),
                    (t = e.tasks),
                    U('tasks', [].concat(Object(_.a)(t), [q.payload]), !1),
                    (a.next = 11);
                  break;
                case 8:
                  (a.prev = 8),
                    (a.t0 = a.catch(0)),
                    console.log('error: ', a.t0);
                case 11:
                case 'end':
                  return a.stop();
              }
          },
          ft,
          null,
          [[0, 8]]
        );
      }
      function ht() {
        var e, t;
        return te.a.wrap(
          function(a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (a.prev = 0), (a.next = 3), Object(it.d)();
                case 3:
                  (e = a.sent),
                    (t = e.tasks),
                    U(
                      'tasks',
                      [].concat(
                        Object(_.a)(t.slice(0, q.payload)),
                        Object(_.a)(t.slice(q.payload + 1))
                      ),
                      !1
                    ),
                    (a.next = 11);
                  break;
                case 8:
                  (a.prev = 8),
                    (a.t0 = a.catch(0)),
                    console.log('error: ', a.t0);
                case 11:
                case 'end':
                  return a.stop();
              }
          },
          pt,
          null,
          [[0, 8]]
        );
      }
      function gt() {
        return te.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(it.e)(le, bt);
              case 2:
                return (e.next = 4), Object(it.e)(se, ht);
              case 4:
              case 'end':
                return e.stop();
            }
        }, dt);
      }
      var Et = te.a.mark(vt);
      function vt() {
        return te.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(it.a)([mt(), gt()]);
              case 2:
              case 'end':
                return e.stop();
            }
        }, Et);
      }
      var kt = Object(ot.a)(),
        Ot = Object(nt.createStore)(
          rt,
          Object(ct.composeWithDevTools)(Object(nt.applyMiddleware)(kt))
        );
      kt.run(vt);
      var jt = Ot,
        St = (function(e) {
          function t() {
            return (
              Object(i.a)(this, t),
              Object(s.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(t, e),
            Object(l.a)(t, [
              {
                key: 'render',
                value: function() {
                  return r.a.createElement(
                    f.a,
                    { store: jt },
                    r.a.createElement(
                      b.a,
                      null,
                      r.a.createElement(
                        p.a,
                        null,
                        r.a.createElement(
                          d.c,
                          null,
                          r.a.createElement(
                            d.a,
                            { path: [M, F, B], exact: !0 },
                            r.a.createElement(ke, null),
                            r.a.createElement(at, null)
                          ),
                          r.a.createElement(
                            d.a,
                            { path: ''.concat(A, ':id') },
                            r.a.createElement(Z, null)
                          ),
                          r.a.createElement(d.a, { component: w })
                        )
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(r.a.Component);
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      a(494);
      o.a.render(r.a.createElement(St, null), document.getElementById('root')),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    },
  },
  [[276, 1, 2]],
]);
//# sourceMappingURL=main.f01a17e3.chunk.js.map
