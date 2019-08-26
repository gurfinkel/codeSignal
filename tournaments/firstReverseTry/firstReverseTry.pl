#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub firstReverseTry {
    my ($arr) = @_;

    unless (@$arr) {
        return $arr;
    }

    @$arr[0, @$arr - 1] = @$arr[@$arr - 1, 0];

    return $arr;
}
