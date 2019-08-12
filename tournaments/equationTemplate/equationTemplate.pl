#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub equationTemplate {
    my ($values) = @_;

    my ($c, $d, $e, $f) = @$values;

    return $e*$f==$c*$d || $e*$c==$f*$d || $e*$d==$f*$c || $e*$f*$c==$d || $e*$f*$d==$c || $e*$d*$c==$f || $d*$f*$c==$e;
}
