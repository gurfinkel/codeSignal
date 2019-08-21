#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub passwordCheckRegExp {
    my ($inputString) = @_;

    my $len = $inputString =~ tr/0-9a-zA-Z//;
    my $digits = $inputString =~ tr/0-9//;
    my $lowers = $inputString =~ tr/a-z//;
    my $uppers = $inputString =~ tr/A-Z//;

    return 4 < $len && 0 < $digits && 0 < $lowers && 0 < $uppers ? 1 : 0;
}
